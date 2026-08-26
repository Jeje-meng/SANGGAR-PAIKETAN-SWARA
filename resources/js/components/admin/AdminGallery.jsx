import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';

export default function AdminGallery() {
    const [galleries, setGalleries] = useState([]);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('general');
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        const response = await axios.get('/api/gallery');
        setGalleries(response.data);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!image) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('category', category);

        try {
            await axios.post('/api/gallery', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setImage(null);
            setTitle('');
            fetchGallery();
            alert('Upload berhasil!');
        } catch (err) {
            alert('Gagal upload gambar.');
        }
        setUploading(false);
    };

    const handleDelete = async (id) => {
        if (!confirm('Hapus gambar ini?')) return;
        try {
            await axios.delete(`/api/gallery/${id}`);
            fetchGallery();
        } catch (err) {
            alert('Gagal menghapus gambar.');
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#261E14] mb-6">Kelola Galeri</h1>
            
            <div className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-semibold mb-4">Upload Gambar Baru</h2>
                <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm mb-1">Pilih File</label>
                        <input type="file" onChange={e => setImage(e.target.files[0])} accept="image/*" required className="w-full" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Judul / Keterangan</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" placeholder="Judul gambar" />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Kategori</label>
                        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 border rounded">
                            <option value="general">Umum</option>
                            <option value="tari">Tari</option>
                            <option value="gamelan">Gamelan</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" disabled={uploading} className="w-full bg-[#8B261E] text-white p-2 rounded hover:bg-red-800 font-bold">
                            {uploading ? 'Mengupload...' : 'Upload'}
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleries.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded shadow relative">
                        <img src={`/storage/${item.image_path}`} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
                        <h3 className="font-semibold text-sm truncate">{item.title || 'Tanpa Judul'}</h3>
                        <p className="text-xs text-gray-500 mb-2">Kat: {item.category}</p>
                        <button onClick={() => handleDelete(item.id)} className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-800 text-xs shadow">
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
