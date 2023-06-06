// Component Courses HTML 
import HTML_M1_1 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_1";
import HTML_M1_2 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_2";
import HTML_M1_3 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_3";
import HTML_M1_4 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_4";
import HTML_M1_5 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_5";

import HTML_M2_1 from "../Component/DetailMaterialComp/HTML/AlurWeb/HTML_M2_1";
import HTML_M2_2 from "../Component/DetailMaterialComp/HTML/AlurWeb/HTML_M2_2";
import HTML_M2_3 from "../Component/DetailMaterialComp/HTML/AlurWeb/HTML_M2_3";

import HTML_M3_1 from "../Component/DetailMaterialComp/HTML/PengenalanHTML/HTML_M3_1";
import HTML_M3_2 from "../Component/DetailMaterialComp/HTML/PengenalanHTML/HTML_M3_2";
import HTML_M3_3 from "../Component/DetailMaterialComp/HTML/PengenalanHTML/HTML_M3_3";
import HTML_M3_4 from "../Component/DetailMaterialComp/HTML/PengenalanHTML/HTML_M3_4";

const dataMaterial = [
    {
        tag: 'html',
        kelas: "HTML Full Course",
        materi: [
            {
                id: 1,
                judul: 'Profesi dalam Pengembangan Web',
                subJudul: [
                    'Pendahuluan','Syarat & Keterampilan Pengembang Web','Profesi dalam Pengembangan Website','Tantangan dan Tren','Kesimpulan'
                ],
                file: [
                    {
                        id: 1,
                        page: <HTML_M1_1 />,
                    },
                    {
                        id: 2,
                        page: <HTML_M1_2 />,
                    },
                    {
                        id: 3,
                        page: <HTML_M1_3 />,
                    },
                    {
                        id: 4,
                        page: <HTML_M1_4 />,
                    },
                    {
                        id: 5,
                        page: <HTML_M1_5 />
                    }
                ],
            },
            {
                id: 2,
                judul: 'Alur pengembangan aplikasi web.',
                subJudul: ['Pendahuluan', 'Tahapan dalam alur pengembangan aplikasi web', 'Kesimpulan'],
                file: [
                    {
                        id: 1,
                        page: <HTML_M2_1 />,
                    },
                    {
                        id: 2,
                        page: <HTML_M2_2 />,
                    },
                    {
                        id: 3,
                        page: <HTML_M2_3 />,
                    },
                ],
            },
            {
                id: 3,
                judul: 'Pengenalan HTML.',
                subJudul: ['Pendahuluan', 'Struktur Dasar Halaman dengan HTML', 'Tag HTML Dasar', 'Atribut HTML'],
                file: [
                    {
                        id: 1,
                        page: <HTML_M3_1 />,
                    },
                    {
                        id: 2,
                        page: <HTML_M3_2 />,
                    },
                    {
                        id: 3,
                        page: <HTML_M3_3 />,
                    },
                    {
                        id: 4,
                        page: <HTML_M3_4 />,
                    },
                ],
            },
            {
                id: 4,
                judul: 'Jenis list dalam HTML.',
                subJudul: ['list1', 'list2', 'list3', 'list4'],
                file: [`HTML_M4_1`, `HTML_M4_2`, `HTML_M4_3`, `HTML_M4_4`],
                fileQuiz: `HTML_M4_Quiz`,
            },
            {
                id: 5,
                judul: 'Penggunaan hyperlink dalam HTML.',
                subJudul: ['link1', 'link2', 'link3', 'link4'],
                file: [`HTML_M5_1`, `HTML_M5_2`, `HTML_M5_3`, `HTML_M5_4`],
                fileQuiz: `HTML_M5_Quiz`,
            },
            {
                id: 6,
                judul: 'Penggunaan tabel dalam HTML.',
                subJudul: ['tabel1', 'tabel2', 'tabel3', 'tabel4'],
                file: [`HTML_M6_1`, `HTML_M6_2`, `HTML_M6_3`, `HTML_M6_4`],
                fileQuiz: `HTML_M6_Quiz`,
            },
            {
                id: 7,
                judul: 'Jenis input dan formulir dalam HTML.',
                subJudul: ['form1', 'form2', 'form3', 'form4'],
                file: [`HTML_M7_1`, `HTML_M7_2`, `HTML_M7_3`, `HTML_M7_4`],
                fileQuiz: `HTML_M7_Quiz`,
            }
        ],
    },
    {
        tag: 'css',
        materi: [
            {
                id: 1,
                judul: 'XXXXX',
                file: [`CSS_M1_1`, `CSS_M1_2`, `CSS_M1_3`, `CSS_M1_4`],
                fileQuiz: `CSS_M1_Quiz`
            },
        ],
    }
];

export const getMaterial = (courseId) => {
    const data = dataMaterial.filter((item) => item.tag === courseId)[0].materi;
    return data;
}
