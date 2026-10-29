function fn_ValForm() {
    var sMsg = "";
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;

    if (nama == "") {
        sMsg += "\n- Anda belum mengisikan nama";
    }
    if (email == "") {
        sMsg += "\n- Anda belum mengisikan email";
    }
    if (umur == "") {
        sMsg += "\n- Anda belum mengisikan umur";
    }
    if (kategori == "") {
        sMsg += "\n- Anda belum memilih jenis acara";
    }

var regEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (email != "" && !regEmail.(email));
        sMsg += "\n- ";
    }

var info = "";
    if (umur != "") {
        if (is(umur)) {
            sMsg += "\n- Umur harus berupa angka";
        } else {
            var nUmur = parseInt(umur);
            if (nUmur < 15 || nUmur > 60) {
                sMsg += "\n- Umur harus berada di antara 15 sampai 60 tahun";
            } else {
                if (nUmur <= 25) {
                    info = "Peserta Mahasiswa";
                } else {
                    info = "Peserta Umum";
                }
            }
        }
    }

var pilihan = "";
    if (sMsg == "") {
        switch (kategori) {
            case "W":
                pilihan = "Workshop";
                break;
            case "S":
                pilihan = "Seminar";
                break;
            case "L":
                pilihan = "Lomba Coding";
                break;
        }
    }

    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    } else {
        alert("Terima kasih " + nama + " ! Anda terdaftar di acara " + pilihan + " (" + info + ").");
        return true;
    }
}