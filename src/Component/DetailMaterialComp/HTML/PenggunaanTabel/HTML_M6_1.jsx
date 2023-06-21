const HTML_M6_1 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 1 - Pembuatan Tabel</h1>
      {/* <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
        <img
          className="rounded-lg mx-auto w-4/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687324570/M5_G1_cykn0n.png"
          alt="MissingIMG"
        />
      </div> */}
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          {`
            Tabel merupakan cara untuk menampilkan informasi dalam bentuk sel yang terdiri 
            atas baris dan kolom. Untuk menampilkan data dalam bentuk tabel pada HTML, 
            digunakan Tag<Table>. Elemen table berisi property <tr> untuk menentukan baris(table row) 
            yang didalamnya terdapat properti <td> untuk menampilkan data pada setiap sel tabel(table data). 
            Untuk mendefinisikan tabel heading atau judul tiap kolom menggunakan tag <th>. 
            `}
        </p>
        <br />
        <p>Struktur dasar elemen tabel adalah sebagai berikut: </p>
      </div>
      <div className="w-10/12 mx-auto p-2 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687326930/M6_G5_qhhsyt.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black flex flex-col gap-y-4 font-normal">
        <p className="opacity-70">
          Didalam tabel juga terdapat atribut yang berfungsi untuk mengatur
          elemen tabel. Dibawah ini merupakan contoh-contoh atribut dalam tabel:
        </p>
        <br />
        <p className="font-semibold opacity-70">- Atribut Halaman Tabel</p>
        <div className="w-10/12 mx-auto p-2 opacity-100">
          <img
            className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687327138/M6_G6_wg85qt.png"
            alt="MissingIMG"
          />
        </div>
        <br />
        <p className="font-semibold opacity-70">- Atribut Table Row</p>
        <div className="w-10/12 mx-auto p-2 opacity-100">
          <img
            className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687327303/M6_G7_comiev.png"
            alt="MissingIMG"
          />
        </div>
        <br />
        <p className="font-semibold opacity-70">- Atribut Table Data</p>
        <div className="w-10/12 mx-auto p-2 opacity-100">
          <img
            className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687327484/M6_G8_mlgy1x.png"
            alt="MissingIMG"
          />
        </div>
      </div>
    </>
  );
};

export default HTML_M6_1;
