const HTML_M3_2 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">
        MATERI 2 - Struktur Dasar Halaman Web dengan HTML
      </h1>
      <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
        <img
          className="rounded-lg drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1686073017/StrukturDasarHTML.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Dalam HTML, sebuah halaman web terdiri dari struktur dasar yang
          terdiri dari beberapa tag HTML. Struktur dasar ini terdiri dari
          beberapa tag, di antaranya:
        </p>
        <div>
          <ol type="1">
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">
                  1. {`<!DOCTYPE html>`}
                </p>
                <p className="pl-5">
                  tag ini menentukan jenis dokumen HTML yang digunakan. Dalam
                  kasus ini, dokumen HTML versi terbaru digunakan.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">2. {`<html>`}</p>
                <p className="pl-5">
                  tag ini membungkus seluruh konten halaman web dan menandakan
                  awal dan akhir dari halaman web.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">3. {`<head>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menyimpan informasi tentang halaman
                  web, seperti judul, deskripsi, dan metadata.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">4. {`<title>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menentukan judul halaman web.
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="font-semibold text-lg mt-2">5. {`<body>`}</p>
                <p className="pl-5">
                  tag ini digunakan untuk menentukan konten halaman web.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default HTML_M3_2;
