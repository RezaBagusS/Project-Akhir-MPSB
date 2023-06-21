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
                jawabanSalah:
                  "Elemen yang digunakan untuk menghias halaman web",
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
                jawabanSalah:
                  "Elemen yang digunakan untuk memberikan informasi tambahan pada halaman web",
              },
            ],
          },
          {
            id: 4,
            judul: "Jenis List dalam HTML",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa yang dimaksud dengan list dalam HTML?",
                jawabanBenar:
                  "Sebuah elemen yang digunakan untuk menampilkan serangkaian item terstruktur.",
                jawabanSalah:
                  "Sebuah daftar yang menampilkan data dalam bentuk tabel.",
              },
              {
                id: 2,
                soal: "Tag HTML yang digunakan untuk membuat list terurut dalam bentuk angka adalah:",
                jawabanBenar: "<ol type='1'>",
                jawabanSalah: "<ul >",
              },
              {
                id: 3,
                soal: "Tag <li> digunakan untuk ... ",
                jawabanBenar: "Membuat item dalam list",
                jawabanSalah: "Membuat definisi list yang digunakan",
              },
              {
                id: 4,
                soal: "Dalam sebuah website, seorang pengembang ingin membuat sublist dalam list tak terurut. Bagaimana cara pengembang tersebut dapat mencapai hal tersebut?",
                jawabanBenar:
                  "Menambahkan tag <ul> di dalam tag <li> untuk membuat sublist.",
                jawabanSalah:
                  "Menambahkan tag <ol> di dalam tag <ul> untuk membuat sublist.",
              },
              {
                id: 5,
                soal: "Atribut 'type' pada sebuah tag list, digunakan untuk ... ",
                jawabanBenar: "Menentukan jenis list yang akan ditampilkan",
                jawabanSalah: "Menentukan jumlah item yang akan ditampilkan",
              },
            ],
          },
          {
            id: 5,
            judul: "Penggunaan hyperlink dalam HTML",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa yang dimaksud dengan hyperlink dalam HTML ?",
                jawabanBenar:
                  "Sebuah elemen yang digunakan untuk membuat tautan ke halaman web lain.",
                jawabanSalah:
                  "Sebuah elemen yang digunakan untuk membuat tautan ke sebuah file di server/directory yang berbeda.",
              },
              {
                id: 2,
                soal: "Apa fungsi dari sebuah link di dalam sebuah website ?",
                jawabanBenar:
                  "Untuk memudahkan pengunjung web dalam menelusuri/menjelajahi seluruh isi atau informasi yang tersimpan dalam situs web bersangkutan.",
                jawabanSalah:
                  "Untuk menghubungkan antara satu user dengan user lainnya.",
              },
              {
                id: 3,
                soal: "Warna teks secara default dalam sebuah link adalah ... ",
                jawabanBenar: "Biru",
                jawabanSalah: "Merah",
              },
              {
                id: 4,
                soal: "Tag HTML yang digunakan untuk membuat hyperlink adalah ... ",
                jawabanBenar: "Tag <a>",
                jawabanSalah: "Tag <link>",
              },
              {
                id: 5,
                soal: "Atribut 'href' pada sebuah tag <a>, digunakan untuk ... ",
                jawabanBenar:
                  "Menentukan alamat URL yang akan dituju oleh link tersebut",
                jawabanSalah:
                  "Memberikan informasi tambahan pada link tersebut seperti judul dan deskripsi",
              },
            ],
          },
          {
            id: 5,
            judul: "Penggunaan Tabel dalam HTML",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa yang dimaksud dengan tabel dalam HTML ?",
                jawabanBenar:
                  "Tag HTML yang digunakan untuk menampilkan data dalam bentuk tabel.",
                jawabanSalah:
                  "Tag HTML yang digunakan untuk menampilkan data dalam bentuk list.",
              },
              {
                id: 2,
                soal: "<thead>, <tbody> & <tfoot> adalah contoh dari ... ",
                jawabanBenar:
                  "Elemen yang digunakan untuk mengelompokkan data didalamnya",
                jawabanSalah:
                  "Elemen yang digunakan untuk menampilkan data dalam bentuk tabel",
              },
              {
                id: 3,
                soal: "Atribut 'border' pada sebuah tag <table>, digunakan untuk ... ",
                jawabanBenar: "Menentukan ketebalan garis pada tabel",
                jawabanSalah: "Menentukan warna garis pada tabel",
              },
              {
                id: 4,
                soal: "Atribut yang digunakan untuk menggabungkan 2 atau lebih sel dalam tabel adalah ... ",
                jawabanBenar: "colspan & rowspan",
                jawabanSalah: "colsget & rowsget",
              },
              {
                id: 5,
                soal: "Secara default data pada baris header kita akan ditampilkan dengan tebal dengan tag ... ",
                jawabanBenar: "<th> : table head",
                jawabanSalah: "<tb> : table bold",
              },
            ],
          },
          {
            id: 5,
            judul: "Jenis input dan formulir dalam HTML.",
            soalQuiz: [
              {
                id: 1,
                soal: "Apa yang dimaksud dengan form dalam HTML ?",
                jawabanBenar:
                  "Salah satu bentuk halaman web yang digunakan untuk menerima masukan dari pengguna.",
                jawabanSalah:
                  "Salah satu bentuk halaman web yang digunakan untuk menampilkan data dalam bentuk form.",
              },
              {
                id: 2,
                soal: "Mengapa form di HTML itu penting ?",
                jawabanBenar:
                  "Karena form dapat digunakan untuk mengumpulkan informasi dari pengguna.",
                jawabanSalah:
                  "Karena form dapat digunakan untuk mengirim informasi ke pengguna.",
              },
              {
                id: 3,
                soal: "Jenis input yang digunakan untuk membuat kotak string dalam form ?",
                jawabanBenar: "<input type='text'>",
                jawabanSalah: "<input type='string'>",
              },
              {
                id: 4,
                soal: "Apa saja input yang dapat digunakan dalam form ?",
                jawabanBenar: "text, password, radio, checkbox, file, dll",
                jawabanSalah: "string, password, check, file, dll",
              },
              {
                id: 5,
                soal: "Ketika pengguna ingin memilih lebih dari 1 pilihan, input apa yang dapat digunakan ?",
                jawabanBenar: "<input type='checkbox'>",
                jawabanSalah: "<input type='option'>",
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
