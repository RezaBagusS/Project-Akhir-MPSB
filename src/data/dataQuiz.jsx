const dataQuiz = [
  {
    tag: "html",
    kelas: [
      {
        id: 1,
        judul: "HTML Full Course",
        materiQuiz: [
          {
            id: 1,
            judul: "Profesi dalam Pengembangan Web",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa tanggung jawab seorang UI/UX Designer dalam pengembangan aplikasi web ?",
                jawabanBenar:
                  "Merancang antarmuka pengguna yang intuitif dan menarik.",
                jawabanSalah: "Mengelola logika bisnis dan pemrosesan data.",
              },
              {
                id: 2,
                soal: "Apa persyaratan dasar yang diperlukan dalam pengembangan aplikasi web ?",
                jawabanBenar:
                  "Penguasaan bahasa pemrograman dan pemahaman tentang prinsip desain UI/UX.",
                jawabanSalah:
                  "Pengetahuan tentang keamanan aplikasi web dan kemampuan belajar mandiri.",
              },
              {
                id: 3,
                soal: "Apa peran keterampilan problem solving dalam pengembangan aplikasi web ?",
                jawabanBenar:
                  "Mampu menganalisis masalah, mengidentifikasi solusi yang tepat, dan mengimplementasikan solusi tersebut secara efektif",
                jawabanSalah:
                  "Mampu mengikuti perkembangan teknologi baru dan bahasa pemrograman baru",
              },
              {
                id: 4,
                soal: "Tantangan utama dalam pengembangan aplikasi web adalah... ",
                jawabanBenar: " Memahami tren desain terkini.",
                jawabanSalah: "Keamanan data yang terjamin.",
              },
              {
                id: 5,
                soal: "Apa yang harus diperhatikan oleh profesional dalam pengembangan aplikasi web terkait dengan keamanan ?",
                jawabanBenar:
                  "Perlindungan terhadap serangan Cross-Site Scripting (XSS)",
                jawabanSalah: "Pengembangan berkelanjutan",
              },
            ],
          },
          {
            id: 2,
            judul: "Alur pengembangan aplikasi web.",
            soalQuiz: [
              {
                id: 1,
                soal: "Tahapan awal dalam pengembangan aplikasi web adalah...",
                jawabanBenar: "Perencanaan",
                jawabanSalah: "Pengujian",
              },
              {
                id: 2,
                soal: "Tahap dalam pengembangan aplikasi web yang melibatkan pengumpulan informasi kebutuhan aplikasi adalah...",
                jawabanBenar: "Analisis Kebutuhan",
                jawabanSalah: "Desain",
              },
              {
                id: 3,
                soal: "Tahap dalam pengembangan aplikasi web yang melibatkan pembuatan desain tampilan dan struktur aplikasi adalah...",
                jawabanBenar: "Desain",
                jawabanSalah: "Pengujian",
              },
              {
                id: 4,
                soal: "Tahap dalam pengembangan aplikasi web yang melibatkan pembuatan kode dan pengujian unit adalah... ",
                jawabanBenar: "Pengembangan",
                jawabanSalah: "Pemeliharaan",
              },
              {
                id: 5,
                soal: "Tahap dalam pengembangan aplikasi web yang melibatkan peluncuran aplikasi secara resmi ke lingkungan produksi adalah...",
                jawabanBenar: "Implementasi",
                jawabanSalah: "Perencanaan",
              },
            ],
          },
          {
            id: 3,
            judul: "Pengenalan HTML",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa fungsi HTML dalam pengembangan web ?",
                jawabanBenar: "Menentukan struktur dan konten halaman web",
                jawabanSalah: "Mengatur tampilan halaman web",
              },
              {
                id: 2,
                soal: "Apa yang dimaksud dengan tag dalam HTML ?",
                jawabanBenar:
                  "Elemen yang digunakan untuk menyusun struktur tampilan halaman web",
                jawabanSalah: "Elemen yang digunakan untuk menghias halaman web",
              },
              {
                id: 3,
                soal: "Apa kepanjangan dari HTML ?",
                jawabanBenar: "HyperText Markup Language",
                jawabanSalah: "HyperText Markup Layout",
              },
              {
                id: 4,
                soal: "Dibawah ini yang termasuk tag dalam HTML adalah... ",
                jawabanBenar: "<html>, <body>, <a> dan <hr>",
                jawabanSalah: "<html>, <body>, <h1> dan <p1>",
              },
              {
                id: 5,
                soal: "Apa yang dimaksud dengan atribut dalam HTML ?",
                jawabanBenar:
                  "Elemen yang digunakan untuk memberikan informasi tambahan pada tag",
                jawabanSalah: "Elemen yang digunakan untuk memberikan informasi tambahan pada halaman web",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getQuiz = (tag, id) => {
  const kelas = dataQuiz.find((item) => item.tag === tag).kelas;
  const quiz = kelas.find(
    (item) => item.materiQuiz[id - 1].id == id
  ).materiQuiz;
  return quiz;
};

export const getJudul = (tag, id) => {
  const kelas = dataQuiz.find((item) => item.tag === tag).kelas;
  const judul = kelas.find((item) => item.id == id).judul;

  return judul;
};
