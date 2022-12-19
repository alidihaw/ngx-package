import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class RupiahService {
    public getTerbilang(value: number) {
        let valueString = String(value);
        let result = '';

        let i = 0;
        let j = 0;

        const angka: any = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
        const kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
        const tingkat = new Array('', 'Ribu', 'Juta', 'Milyar', 'Triliun');

        const panjang_valueString = valueString.length;

        /* pengujian panjang valueString */
        if (panjang_valueString > 15) {
            result = "Diluar Batas";
            return result;
        }

        /* mengambil angka-angka yang ada dalam valueString, dimasukkan ke dalam array */
        for (i = 1; i <= panjang_valueString; i++) {
            angka[i] = valueString.substr(-(i), 1);
        }

        i = 1;
        j = 0;
        result = "";

        /* mulai proses iterasi terhadap array angka */
        while (i <= panjang_valueString) {

            let subresult = "";
            let kata1 = "";
            let kata2 = "";
            let kata3 = "";

            /* untuk Ratusan */
            if (angka[i + 2] != "0") {
                if (angka[i + 2] == "1") {
                    kata1 = "Seratus";
                } else {
                    kata1 = kata[angka[i + 2]] + " Ratus";
                }
            }

            /* untuk Puluhan atau Belasan */
            if (angka[i + 1] != "0") {
                if (angka[i + 1] == "1") {
                    if (angka[i] == "0") {
                        kata2 = "Sepuluh";
                    } else if (angka[i] == "1") {
                        kata2 = "Sebelas";
                    } else {
                        kata2 = kata[angka[i]] + " Belas";
                    }
                } else {
                    kata2 = kata[angka[i + 1]] + " Puluh";
                }
            }

            /* untuk Satuan */
            if (angka[i] != "0") {
                if (angka[i + 1] != "1") {
                    kata3 = kata[angka[i]];
                }
            }

            /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
            if ((angka[i] != "0") || (angka[i + 1] != "0") || (angka[i + 2] != "0")) {
                subresult = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
            }

            /* gabungkan variabe sub result (untuk Satu blok 3 angka) ke variabel result */
            result = subresult + result;
            i = i + 3;
            j = j + 1;

        }

        /* mengganti Satu Ribu jadi Seribu jika diperlukan */
        if ((angka[5] == "0") && (angka[6] == "0")) {
            result = result.replace("Satu Ribu", "Seribu");
        }

        return result + "Rupiah";
    }
}