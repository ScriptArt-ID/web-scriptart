"use client";
import React from 'react'
import FormWebs from './FormWebs';
import {webCollection} from "@/lib/firebase";
import {deleteDoc, doc, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

interface Web {
    id: string;
        titleWebs: string;
        linkFull: string;
        imageUrl: string;
        category?: string;
        dateCreated: string;
}

export default function WebsTable() {
const [webs, setWebs] = useState<Web[]>([]);
const [selectedWeb, setSelectedWeb] = useState<Web | undefined>(undefined);
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    const fetchData = async () => {
        const data = await getDocs(webCollection);
        setWebs(data.docs.map((doc) => ({...doc.data(), id: doc.id}) as Web));
    };
    fetchData();
}, []);

const handleDelete = async (id: string) => {
    try {
        await deleteDoc(doc(webCollection, id));
        setWebs(webs.filter((member) => member.id !== id));
        toast.success("DATA BERHASIL JE PEJE");
    } catch (error) {
        toast.error("DATA GAGAL JE PEJE");
}
};

  return (
    <div className='p-6'>
      <button 
         onClick={() => {setSelectedWeb(undefined);
         setIsOpen(true);
      }} className='bg-blue-500 mb-4 text-white py-2 px-4 rounded'>
        Tambah Data Web
      </button>

      {isOpen && (
        <FormWebs
        exitingData={selectedWeb} 
        onClose={() => {
            setIsOpen(false);
            location.reload();
        }}
        />
      )}
    <table className='w-full border-collapse border'>
        <thead>
            <tr className='bg-blue-500 text-white'>
            <th>Tanggal</th>
                <th className='border p-2'>Judul</th>
                <th className='border p-2'>Link</th>
                <th className='border p-2'>Category</th>
                <th className='border p-2'>Gambar</th>
                <th className='border p-2'>Aksi</th>
            </tr>
        </thead>
        <tbody>
            {webs.map((web) => (
                <tr className='bg-white' key={web.id}>
                    <td className='border p-2'>{web.dateCreated}</td>
                    <td className='border p-2'>{web.titleWebs}</td>
                    <td className='border p-2'>{web.linkFull}</td>
                    <td className='border p-2'>{web.category}</td>
                    <td className='border p-2 flex items-center justify-center text-center'>
                        <img src={web.imageUrl} alt={web.titleWebs} className='h-12'/>
                    </td>
                    <td className='border p-2  items-center justify-center text-center'>
                        <button onClick={() => {
                            setSelectedWeb(web);
                            setIsOpen(true);
                        }} className='bg-yellow-500 text-white px-2 py-1 rounded'>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(web.id)} className='bg-red-500 text-white px-2 py-1 rounded'>
                            Hapus
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    </div>
  )
}
