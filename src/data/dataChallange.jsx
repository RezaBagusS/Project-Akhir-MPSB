export const dataChallange = [
  {
    id: 1,
    tag: "HTML",
    title: "Studi Kasus: Membuat Tabel di Program HTML",
    openDate: new Date("2023-06-15T00:00:00.999+07:00"),
    closeDate: new Date("2023-06-25T23:59:59.999+07:00"),
    studyCase:
      "Kita akan membuat sebuah tabel yang menampilkan daftar produk-produk makanan. Setiap baris pada tabel akan mewakili satu produk dengan informasi seperti nama produk, harga, dan ketersediaan. Berikut adalah langkah-langkah dan ketentuan yang perlu diikuti:",
    instruksi: [
      `Isi sel-sel kepala tabel dengan teks yang sesuai, misalnya "Nama Produk", "Harga", dan "Ketersediaan".`,
      `Isi sel-sel pada baris pertama dengan informasi produk yang pertama, misalnya "Bakso", "Rp 15.000", dan "Tersedia".`,
      `Isi sel-sel pada baris kedua dengan informasi produk yang kedua, misalnya "Soto", "Rp 12.000", dan "Tersedia".`,
      `Isi sel-sel pada baris ketiga dengan informasi produk yang ketiga, misalnya "Nasi Goreng", "Rp 10.000", dan "Tidak Tersedia".`,
    ],
    perintah: "Buatlah Tabel dengan ketentuan seperti diatas!",
    output: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1687063181/SampleContohTable_cdyere.png",
    requiredCSS: [
      // "background-color: blue;"
    ],
    requiredJS: [
      // "addEventListener"
    ],
    requiredElements: [
      { element: "table", value: "" },
      { element: "tr", value: "" },
      { element: "td", value: "Bakso" || "Soto" || "Nasi Goreng" },
      { element: "thead", value: "" },
      { element: "th", value: "Nama Produk" || "Harga" || "Ketersediaan" },
    ],
    requiredAttributes: [
      //   { att: "border", value: "2" },
      //   { att: "cellpadding", value: "0" },
      //   { att: "cellspacing", value: "0" },
    ],
  },
  {
    id: 2,
    tag: "HTML",
    title: "Studi Kasus: Membuat List di Program HTML",
    openDate: new Date("2023-06-17T16:00:00.999+07:00"),
    closeDate: new Date("2023-06-27T23:59:59.999+07:00"),
    studyCase:
      "Anda diminta untuk membuat 2 program HTML yang dapat menampilkan sebuah daftar (list) berisi nama-nama buah. Tugas Anda adalah memastikan bahwa program yang dibuat memenuhi kriteria yang telah ditentukan. Berikut adalah instruksi dan ketentuan yang perlu Anda penuhi:",
    instruksi: [
      `Gunakan elemen <ul> dan <ol> untuk masing-masing daftar buah-buahan.`,
      `Pada elemen <ul>, buah yang ditampilkan adalah : Apel, Mangga, Nanas dan Semangka`,
      `Sedangkan, pada elemen <ol>, buah yang ditampilkan adalah : Jeruk, Melon, Pepaya dan Pisang`,
      `Tambahkan sebuah elemen <h1> dengan teks "Daftar Buah" sebagai judul program.`,
      `Pastikan penulisan teks buah-buahan menggunakan huruf awal kapital (misalnya, "Apel" bukan "apel").`,
    ],
    perintah: "Buatlah List dengan ketentuan seperti diatas!",
    output: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1687063389/SampleContohList_y296ko.png",
    requiredCSS: [],
    requiredJS: [],
    requiredElements: [
      { element: "h1", value: "Daftar Buah" },
      { element: "ul", value: "" },
      { element: "ol", value: "" },
      { element: "li", value: "Apel" || "Mangga" || "Nanas" || "Semangka" || "Jeruk" || "Melon" || "Pepaya" || "Pisang" },
    ],
    requiredAttributes: [],
  },
  {
    id: 3,
    tag: "HTML",
    title: "Make it Form with HTML",
    openDate: new Date("2023-09-02T16:00:00.999+07:00"),
    closeDate: new Date("2024-10-02T23:59:59.999+07:00"),
    studyCase: "BUATLAH LIST DALAM HTML SEPERTI GAMBAR BERIKUT",
  },
  // {
  //     id: 4,
  //     tag: "CSS",
  //     title: "Styling your table with CSS",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     openDate: new Date("2023-06-15T16:00:00.999+07:00"),
  //     closeDate: new Date("2023-06-20T23:59:59.999+07:00"),
  // }
];
