const dataQuiz = [
    {
        tag: 'html',
        kelas : [
            {
                id: 1,
                judul: 'HTML Full Course',
                materiQuiz: [
                    {
                        id: 1,
                        judul: 'Profesi dalam Pengembangan Web',
                        soalQuiz: [
                            {
                                id: 1,
                                soal: "Apa saja profesi dalam pengembangan web?",
                                jawabanBenar: "Web Designer, Web Programmer, Web Administrator dan Web Master",
                                jawabanSalah: "Web Designer, Web Programmer, Web Fasilitator dan Web Master",
                            },
                            {
                                id: 2,
                                soal: "Apa itu website?",
                                jawabanBenar: "Website adalah kumpulan halaman web yang saling terhubung dan dapat diakses melalui internet.",
                                jawabanSalah: "Website adalah sebuah halaman web yang terhubung secara lokal dan bisa di akses secara offline.",
                            },
                            {
                                id: 3,
                                soal: "URL merupakan singkatan dari ?",
                                jawabanBenar: "URL adalah singkatan dari Uniform Resource Locator",
                                jawabanSalah: "URL adalah singkatan dari Uniform Research Location",
                            },
                            {
                                id: 4,
                                soal: "Website digunakan sebagai sarana untuk .. ?",
                                jawabanBenar: "Website digunakan sebagai sarana untuk menyajikan informasi, konten multimedia, layanan interaktif, dan banyak lagi kepada pengguna.",
                                jawabanSalah: "Website hanya digunakan sebagai sarana hiburan untuk pengguna melalui internet.",
                            },
                            {
                                id: 5,
                                soal: "Apa skill minimum yang harus dikuasai seorang web programmer?",
                                jawabanBenar: "HTML, CSS, Javascript, PHP & SQL",
                                jawabanSalah: "HTML, CSS, Javascript, C# & Python",
                            }
                        ],
                    }
                ]
            },
        ]
    }
];

export const getQuiz = (tag, id) => {
    const kelas = dataQuiz.find((item) => item.tag === tag).kelas;
    const quiz = kelas.find((item) => item.id == id).materiQuiz;

    return quiz;
}

export const getJudul = (tag, id) => {
    const kelas = dataQuiz.find((item) => item.tag === tag).kelas;
    const judul = kelas.find((item) => item.id == id).judul;

    return judul;
}