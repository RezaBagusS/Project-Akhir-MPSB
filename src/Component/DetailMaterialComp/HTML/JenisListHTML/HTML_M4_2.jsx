const HTML_M4_2 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 2 - Jenis List</h1>
      <div className="py-5 text-black flex flex-col gap-y-4 font-normal">
        <p>
          Ada dua jenis list dalam HTML, yaitu ordered list (daftar terurut) dan
          unordered list (daftar tak terurut)
        </p>
        <ol>
          <li>
            <div className="opacity-70">
              <p className="font-semibold">Ordered List</p>
              <p>
                Daftar yang berurutan biasanya ditandai dengan penggunaan
                penomoran tertentu. Penomoran ini bias menggunakan angka (1, 2,
                3,…) maupun karakter alphabet tertentu (a, b, c,… atau i, ii,
                iii,…). Daftar yang berurutan umumnya dipakai untuk item-item
                yang saling berhubungan satu sama lain, atau untuk menuliskan
                langkah-langkah atau prosedur dari kegiatan tertentu yang tidak
                dapat dilakukan secara acak.
              </p>
              <br />
              <p>
                Contoh daftar yang berurutan adalah pada cara membuat dokumen
                HTML, misalnya :
              </p>
              <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
                <img
                  className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687322362/M4_G2_nqte3d.png"
                  alt="MissingIMG"
                />
              </div>
              <br />
              <p>
                {`
                    Untuk membuat suatu daftar yang berurutan dalam dokumen HTML,
                    digunakan tag <ol> (ordered list), yang berpasangan dengan tag </ol>. 
                    Tag <ol>  digunakan untuk memulai suatu daftar berurutan tertentu, 
                    sedangkan </ol> berfungsi untuk menandakan bahwa daftar tersebut sudah berakhir.
                    Masing-masing item di dalam daftar harus dibuat menggunakan tag
                    <li> (list item) yang kemudian perlu ditutup dengan tag </li>.
                `}
              </p>
              <br />
              <p>Contoh penulisan adalah sebagai berikut : </p>
            </div>
            <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
              <img
                className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687322588/M4_G3_ubstpt.png"
                alt="MissingIMG"
              />
            </div>
            <br />
            <div className="opacity-70">
              <p>
                {`
                    Adapun atribut untuk tag <ol> adalah “type” yang menunjukan jenis penomorannya. 
                    Secara default, tipenya adalah menggunakan penomoran 1, 2, 3, 4 dst.
                `}
              </p>
              <br />
              <p>
                Selain tipe default, tipe lain yang dapat digunakan untuk
                keperluan penomoran dalam suatu list adalah :
              </p>
            </div>
            <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
              <img
                className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687322799/M4_G4_qktkv1.png"
                alt="MissingIMG"
              />
            </div>
          </li>
          <li>
            <div className="opacity-70">
              <p className="font-semibold">Unordered List</p>
              <p>
                Daftar yang tidak berurutan adalah daftar yang item-itemnya
                dapat diubah posisinya secara acak. Daftar seperti ini tidak
                menggunakan penomoran seperti di atas, melainkan hanya dengan
                menggunakan tanda atau simbol tertentu, misalnya gambar kotak
                atau bulat (bullet).
              </p>
              <br />
              <p>Contoh :</p>
            </div>
            <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
              <img
                className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687323154/M4_G5_txskvf.png"
                alt="MissingIMG"
              />
            </div>
            <div className="opacity-70">
              <p>
                Pada contoh di atas, kita dapat mengubah/mengacak secara bebas
                urutan dari masing-masing item yang ada. Hal ini disebabkan
                karena setiap item yang ada tidak memiliki keterkaitan satu sama
                lain dengan item lainnya, berbeda dengan suatu urutan langkah
                tertentu yang harus ditulis secara berurutan.
              </p>
              <br />
              <p>
                {`
                    Untuk membuat suatu daftar yang tidak berurutan dalam dokumen HTML, 
                    digunakan tag <ul> (unordered list), yang berpasangan dengan tag </ul>. 
                    Tag <ul> digunakan untuk memulai suatu daftar berurutan tertentu, sedangkan 
                    </ul> berfungsi untuk menandakan bahwa daftar tersebut sudah berakhir. 
                    Masing-masing item di dalam daftar harus dibuat menggunakan tag <li> (list item) 
                    yang kemudian perlu ditutup dengan tag </li>.
                `}
              </p>
              <br />
              <p>Contoh penulisannya adalah berikut:</p>
            </div>
            <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
              <img
                className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687323292/M4_G6_ra791u.png"
                alt="MissingIMG"
              />
            </div>
            <div className="opacity-70">
              <br />
              <p>
                {`
                    Adapun atribut untuk tag <ul> adalah “type” yang menunjukan jenis tanda untuk 
                    setiap item berupa tanda bulatan untuk defaultnya.     
                `}
              </p>
              <br />
              <p>
                Selain tipe default, tipe lain yang dapat digunakan untuk
                keperluan unordered list adalah :
              </p>
            </div>
            <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
              <img
                className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687323435/M4_G7_bjrgyl.png"
                alt="MissingIMG"
              />
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default HTML_M4_2;
