import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../lib/axios';

const PAGE_SCHEMAS = {
    beranda: {
        title: "Kelola Halaman Beranda",
        fields: [
            { key: 'home_hero_title', label: 'Judul Utama (Hero)', type: 'text', section: 'beranda' },
            { key: 'home_hero_desc', label: 'Deskripsi Singkat (Hero)', type: 'text', section: 'beranda' },
            { key: 'home_about_title', label: 'Judul Tentang Kami', type: 'text', section: 'beranda' },
            { key: 'home_about_desc1', label: 'Paragraf Tentang Kami 1', type: 'text', section: 'beranda' },
            { key: 'home_about_desc2', label: 'Paragraf Tentang Kami 2', type: 'text', section: 'beranda' },
            { key: 'home_about_image', label: 'Gambar Tentang Kami', type: 'image', section: 'beranda' }
        ]
    },
    tentangkami: {
        title: "Kelola Halaman Tentang Kami",
        fields: [
            { key: 'about_banner_image', label: 'Gambar Banner Atas', type: 'image', section: 'tentangkami' },
            { key: 'about_title', label: 'Judul Halaman', type: 'text', section: 'tentangkami' },
            { key: 'about_subtitle', label: 'Sub Judul Halaman', type: 'text', section: 'tentangkami' },
            { key: 'about_visi_title', label: 'Judul Visi', type: 'text', section: 'tentangkami' },
            { key: 'about_visi_desc', label: 'Deskripsi Visi', type: 'text', section: 'tentangkami' },
            { key: 'about_misi1_title', label: 'Judul Misi 1', type: 'text', section: 'tentangkami' },
            { key: 'about_misi1_desc', label: 'Deskripsi Misi 1', type: 'text', section: 'tentangkami' },
            { key: 'about_misi2_title', label: 'Judul Misi 2', type: 'text', section: 'tentangkami' },
            { key: 'about_misi2_desc', label: 'Deskripsi Misi 2', type: 'text', section: 'tentangkami' },
            { key: 'about_misi3_title', label: 'Judul Misi 3', type: 'text', section: 'tentangkami' },
            { key: 'about_misi3_desc', label: 'Deskripsi Misi 3', type: 'text', section: 'tentangkami' }
        ]
    },
    program: {
        title: "Kelola Halaman Program Edu-Wisata",
        fields: [
            { key: 'program_banner', label: 'Gambar Banner Program', type: 'image', section: 'program' },
            { key: 'program_title', label: 'Judul Program', type: 'text', section: 'program' }
        ]
    },
    berita: {
        title: "Kelola Halaman Berita",
        fields: [
            { key: 'news_banner', label: 'Gambar Banner Berita', type: 'image', section: 'berita' },
            { key: 'news_hero_title', label: 'Judul Hero', type: 'text', section: 'berita' },
            { key: 'news_hero_desc', label: 'Deskripsi Hero', type: 'text', section: 'berita' }
        ]
    },
    kemitraan: {
        title: "Kelola Halaman Kemitraan",
        fields: [
            { key: 'partnership_banner', label: 'Gambar Banner Kemitraan', type: 'image', section: 'kemitraan' },
            { key: 'partnership_hero_title', label: 'Judul Hero', type: 'text', section: 'kemitraan' },
            { key: 'partnership_hero_desc', label: 'Deskripsi Hero', type: 'text', section: 'kemitraan' },
            { key: 'partnership_callout_title', label: 'Judul Callout CSR', type: 'text', section: 'kemitraan' },
            { key: 'partnership_callout_desc', label: 'Deskripsi Callout CSR', type: 'text', section: 'kemitraan' }
        ]
    },
    kontak: {
        title: "Kelola Halaman Kontak",
        fields: [
            { key: 'contact_banner', label: 'Gambar Banner Kontak', type: 'image', section: 'kontak' },
            { key: 'contact_hero_title', label: 'Judul Hero', type: 'text', section: 'kontak' },
            { key: 'contact_hero_desc', label: 'Deskripsi Hero', type: 'text', section: 'kontak' },
            { key: 'contact_address', label: 'Alamat Sanggar', type: 'text', section: 'kontak' },
            { key: 'contact_phone', label: 'Telepon / WhatsApp', type: 'text', section: 'kontak' },
            { key: 'contact_email', label: 'Email', type: 'text', section: 'kontak' },
            { key: 'contact_hours', label: 'Jam Operasional', type: 'text', section: 'kontak' }
        ]
    }
};

export default function AdminPageEditor() {
    const { slug } = useParams();
    const [contents, setContents] = useState([]);
    const [saving, setSaving] = useState(false);

    const schema = PAGE_SCHEMAS[slug] || { title: "Halaman Tidak Ditemukan", fields: [] };

    useEffect(() => {
        fetchContent();
    }, [slug]);

    const fetchContent = async () => {
        try {
            const response = await axios.get('/api/content');
            setContents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getValue = (key) => {
        const item = contents.find(c => c.key === key);
        return item ? item.value : '';
    };

    const handleChange = (key, value, type, section) => {
        const newContents = [...contents];
        const existingIndex = newContents.findIndex(c => c.key === key);
        
        if (existingIndex >= 0) {
            newContents[existingIndex].value = value;
        } else {
            newContents.push({ key, value, type, section });
        }
        setContents(newContents);
    };

    const handleImageUpload = async (key, file, type, section) => {
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await axios.post('/api/content/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            handleChange(key, res.data.path, type, section);
        } catch (err) {
            alert('Gagal upload gambar konten.');
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await axios.post('/api/content', { contents });
            alert('Berhasil disimpan!');
        } catch (e) {
            alert('Gagal menyimpan.');
        }
        setSaving(false);
    };

    if (!PAGE_SCHEMAS[slug]) {
        return <div className="p-8 text-center text-gray-500">Halaman belum dikonfigurasi.</div>;
    }

    return (
        <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-admin-serif text-admin-primary">{schema.title}</h1>
                <button 
                    onClick={handleSave} 
                    disabled={saving} 
                    className="bg-admin-primary hover:bg-admin-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm transition-all flex items-center gap-2"
                >
                    {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
                </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-admin-primary/10 space-y-8">
                {schema.fields.map((field) => (
                    <div key={field.key} className="border-b border-admin-primary/5 pb-6 last:border-0 last:pb-0">
                        <label className="block text-sm font-semibold text-admin-text/80 mb-3">{field.label}</label>
                        
                        {field.type === 'text' && (
                            <textarea 
                                rows="3" 
                                value={getValue(field.key)} 
                                onChange={e => handleChange(field.key, e.target.value, field.type, field.section)} 
                                className="w-full p-4 bg-admin-bg/30 border border-admin-primary/20 rounded-lg focus:outline-none focus:border-admin-secondary focus:ring-1 focus:ring-admin-secondary transition-colors" 
                                placeholder={`Isi ${field.label}...`}
                            ></textarea>
                        )}
                        
                        {field.type === 'image' && (
                            <div className="flex items-center gap-6">
                                {getValue(field.key) && (
                                    <div className="relative group rounded-lg overflow-hidden border border-admin-primary/10 shadow-sm">
                                        <img src={getValue(field.key).startsWith('http') || getValue(field.key).startsWith('/') ? getValue(field.key) : `/storage/${getValue(field.key)}`} alt="Preview" className="h-32 w-48 object-cover" />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={e => handleImageUpload(field.key, e.target.files[0], field.type, field.section)} 
                                        className="text-sm border border-admin-primary/20 p-2.5 rounded-lg w-full bg-admin-bg/30 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-admin-primary/10 file:text-admin-primary hover:file:bg-admin-primary/20" 
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
