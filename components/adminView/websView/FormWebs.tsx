"use client";
import React from 'react'
import {webCollection} from "@/lib/firebase";
import {addDoc, doc, updateDoc} from "firebase/firestore";
import {useState} from "react";
import {toast} from "react-toastify";
import { uploadToCloudinary } from '@/app/api/upload';

type WebsFormProps ={
    exitingData?: {
        id: string;
        titleWebs: string;
        linkFull: string;
        imageUrl: string;
        category?: string;
    };
    onClose: () => void;
}

export default function FormWebs({exitingData, onClose}: WebsFormProps) {
  const [titleWebs, setTitleWebs] = useState(exitingData?.titleWebs || "");
  const [linkFull, setLinkFull] = useState(exitingData?.linkFull || "");
  const [imageUrl, setImageUrl] = useState(exitingData?.imageUrl || "");
  const [category, setCategory] = useState(exitingData?.category || "Web Development");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = exitingData?.imageUrl || "";

      if (image) {
        const uploadImageUrl = await uploadToCloudinary(image);
        if (!uploadImageUrl) throw new Error("Upload Image Gagal");
        imageUrl = uploadImageUrl;
      }

      const timestamp = new Date().toISOString();

      if (exitingData) {
        await updateDoc(doc(webCollection, exitingData.id), {
          titleWebs,
          linkFull,
          ...(image && {imageUrl }),
          category,
          updatedAt: timestamp,
        });
        toast.success("Data Berhasil Diupdate");
      } else {
        await addDoc (webCollection, {
          titleWebs,
          linkFull,
          imageUrl,
          category,
          dateCreated: timestamp,
        });
        toast.success("Data Berhasil Ditambahkan");
      }

      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast.error("GAGAL LHO JE PJ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded-lg shadow-md'>
      <h1>Judul Project Web</h1>
      <input type="text" placeholder='Masukan Judul Project' value={titleWebs} onChange={(e) => setTitleWebs(e.target.value)} required disabled={!!exitingData} className='w-full p-2 border mb-2'/>
      <h1>Link Project Web</h1>
      <input type="text" placeholder='Masukan Link Project' value={linkFull} onChange={(e) => setLinkFull(e.target.value)} required disabled={!!exitingData} className='w-full p-2 border mb-2'/>

      <h1>Categori</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required className='w-full p-2 rounded mb-2'>
    <option value="Web Development">Web Development</option>
    <option value="Mobile">Mobile</option>
    <option value="UI-UX">UI-UX</option>
    <option value="Graphic Design">Graphic Design</option>
    <option value="Social Media">Social Media</option>
    <option value="Photography">Photography</option>
    <option value="Videography">Videography</option>
      </select>

      <h1>Upload Gambar</h1>
      <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} accept='image/*' className='w-full p-2 rounded mb-2'/>
      <button type="submit" disabled={loading} className='bg-blue-500 text-white py-2 px-4 rounded'>
        {loading ? "Loading..." : exitingData ? "Update" : "Tambah"}
      </button>
    </form>
  )
}
