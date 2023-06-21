const HTML_M7_1 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 1 - Definisi dan Fungsi Form</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Form merupakan salah satu bentuk halaman web yang digunakan untuk
          menerima masukan dari pengguna, untuk selanjutnya masukan dari
          pengguna tersebut diolah menggunakan bahasa pemrograman web, baik
          secara server side scripting(misalkan PHP, JSP) ataupun client-side
          scripting (javascript). Form dapat digunakan untuk berbagai keperluan
          seperti keperluan login, transaksi penjualan, mengumpulkan informasi
          atau meminta umpan balik dari pengguna, menawarkan barang/jasa secara
          on-line dan sebagainya. Form sangat sering kita jumpai dalam satu
          aplikasi sistem informasi berbasis web. Form dapat dibuat dengan
          menggunakan elemen form. Contohnya :
        </p>
        <p className="p-2 bg-blue-gray-200">
          {`
          <form action="" method="">
            ...
          </form>
          `}
        </p>
      </div>
    </>
  );
};

export default HTML_M7_1;
