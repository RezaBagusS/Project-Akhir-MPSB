const HTML_M5_2 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">{`MATERI 2 - Mengenal Tag <a> (anchor)`}</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Untuk membuat suatu link, HTML menyediakan satu tag khusus, yaitu tag
          , yang berpasangan dengan . Setiap teks yang diapit oleh tag ini akan
          ditampilkan sebagai link. Bentuk umum membuat link dalam dokumen HTML
          adalah sebagai berikut :
        </p>
      </div>
      <div className="w-10/12 mx-auto p-2 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687324846/M5_G3_amydy8.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Untuk membuat suatu link, HTML menyediakan satu tag khusus, yaitu tag
          , yang berpasangan dengan . Setiap teks yang diapit oleh tag ini akan
          ditampilkan sebagai link. Bentuk umum membuat link dalam dokumen HTML
          adalah sebagai berikut :
        </p>
        <br />
        <p>Contoh:</p>
      </div>
      <div className="w-10/12 mx-auto p-2 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687324920/M5_G4_n3wihl.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Pada contoh diatas kita membuat tiga buah link dengan teks Home,
          Tentang kami, dan kontak. Ketika pengunjung melakukan klik terhadap
          link pertama (home), web browser akan menampilkan dokumen yang
          disimpan dalam file index.html. Begitu juga dengan link kedua (Tentang
          Kami) dan ketiga (Kontak), setiap di klik akan menjadikan web browser
          menampilkan dokumen yang terdapat pada file about.html dan
          contact.html.
        </p>
        <br />
        <div>
          Berikut ini ada beberapa hal yang perlu diperhatikan dalam pemberian
          nama dokumen web, agar link dapat berfungsi dengan baik :
          <ol type="a">
            <li>- Penamaan file dengan huruf kecil semua</li>
            <li>
              - Penamaan file dengan huruf kecil semua Jangan ada spasi serta
              hindari non-karakter alphabet
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default HTML_M5_2;
