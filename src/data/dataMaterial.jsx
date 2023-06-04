import HTML_M1_1 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_1";
import HTML_M1_2 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_2";
import HTML_M1_3 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_3";
import HTML_M1_4 from "../Component/DetailMaterialComp/HTML/Profesi/HTML_M1_4";

const dataMaterial = [
    {
        tag: 'html',
        kelas: "HTML Full Course",
        materi: [
            {
                id: 1,
                judul: 'Profesi dalam Pengembangan Web',
                subJudul: [
                    'Pendahuluan','Profesi dalam Pengembangan Website','Pengenalan Website','Pengenalan URL'
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
                    }
                ],
                fileQuiz: `<HTML_M1_Quiz />`
            },
            {
                id: 2,
                judul: 'Alur pengembangan aplikasi web.',
                subJudul: ['Alur1', 'Alur2', 'Alur3', 'Alur4'],
                file: [`HTML_M2_1`, `HTML_M2_2`, `HTML_M2_3`, `HTML_M2_4`],
                fileQuiz: `HTML_M2_Quiz`,
            },{
                id: 3,
                judul: 'Pengenalan HTML.',
                subJudul: ['html1', 'html2', 'html3', 'html4'],
                file: [`HTML_M3_1`, `HTML_M3_2`, `HTML_M3_3`, `HTML_M3_4`],
                fileQuiz: `HTML_M3_Quiz`,
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
