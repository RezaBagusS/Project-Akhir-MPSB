const HTML_M1_3 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 4 - Pengenalan URL</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-medium">
        <p>
          Sebuah halaman web adalah dokumen elektronik yang ditulis dalam bahasa
          komputer yang disebut HTML, singkatan dari Hypertext Markup Language.
          Setiap halaman web memiliki alamat yang unik, yang disebut URL atau
          Uniform Eerources Locator yang mengidentifikasi di mana web server
          yang memuat dokumen web.
        </p>
        <p>
          Sebuah website memiliki satu atau lebih halaman web terkait,
          tergantung pada bagaimana itu dirancang. Halaman web pada situs yang
          dihubungkan bersama melalui sistem hyperlink, memungkinkan untuk
          melompat di antara halaman web dengan mengklik pada link.
        </p>
        <p>
          Uniform Resource Locators atau URL adalah alamat yang digunakan untuk
          menemukan file. Informasi yang terkandung dalam URL memberi kemampuan
          untuk berpindah dari satu halaman web yang lain hanya dengan klik.
          Mengetik URL ke browser atau klik link hypertext, browser mengirim
          permintaan ke komputer remote, yang disebut server web, untuk men-
          download satu atau lebih file. Setiap URL unik, mengidentifikasi satu
          file tertentu.
        </p>
        <div>
          <p className="font-semibold">Contoh URL :</p>
          <ol type="1">
            <li>http://belajar.kemdikbud.go.id/</li>
            <li>https://www.w3schools.com/</li>
            <li>https://www.dicoding.com/</li>
          </ol>
        </div>
        <p>
          Sebagian dari URL yang akan menggunakan start dengan http, yang
          merupakan singkatan dari Hypertext Transfer Protocol, metode yang file
          HTML yang ditransfer melalui Web.
        </p>
        <p>
          Jika mengetik URL tidak benar, browser tidak akan dapat menemukan
          situs atau sumber daya yang inginkan. Jika mendapatkan pesan error
          atau mengakses situs yang salah, periksalah untuk melihat apakah
          mengeja alamat dengan benar.
        </p>
      </div>
    </>
  );
};

export default HTML_M1_3;
