const space = document.getElementById("playground");
const dotaznik = [
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]],
    ["Čím podle mého soudu mohu týmu přispět?", ["hledac_zdroju", "tymovy_pracovnik", "tvurce", "koordinator", "dokoncovatel", "navigator", "realizator", "poradce_hodnotitel"]]
];
const sekce = [
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti.", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."],
    ["Nejsem klidný, pokud je špatně sestaven plán porady, není-li její průběh pod kontrolou a je-li celkově špatně vedená.", "Mám sklony být příliš velkorysý vůči těm, kteří v diskusi nemají dostatek prostoru vyjádřit své oprávněné stanovisko.", "Když tým přijde na novou myšlenku, mám sklon hodně mluvit.", "Moje objektivnost mi brání snadno a s nadšením se připojit ke kolegům.", "Je-li zapotřebí něco udělat, bývám někdy považován za energickou a dominantní osobnost.", "Být vůdčí osobností je pro mne obtížné snad proto, že příliš citlivě reaguji na náladu v týmu.", "Mám sklon příliš se zabývat vlastními nápady a tak občas ztrácím přehled o tom, co se děje.", "Moji kolegové si někdy o mně myslí, že se zbytečně zabývám detaily a mám obavy z nezdaru."],
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."],
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."],
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."],
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."],
    ["Myslím, že umím rychle rozpoznat a využít nové možnosti.", "Dokážu dobře spolupracovat s mnoha různými lidmi", "Přicházet s nápady patří mezi mé přirozené klady.", "Dokážu přimět jinou osobu k hovoru kdykoliv zjistím, že může významně přispět k tomu, aby tým dosáhl cíle.", "Moje schopnost dotáhnout věci do konce má hodně společného s mou osobní efektivitou.", "Jestliže to vede k odpovídajícím výsledkům, jsem ochoten čelit dočasné neoblíbenosti", "Rychle vycítím, co se nejspíše osvědčí v situaci, s níž jsem obeznámen.", "Logicky podložené alternativy postupů dokážu přednést bez zaujatosti a předsudků."]
]

class Xhtml {
    i = 0;
    sektor = [];
    vyhodnotit = []
    start() {
        for (let i = 0; i < 7; i++) {
            this.sektor.push(new Xsekce(dotaznik[i][0], i, dotaznik[i][1], sekce[i]))

        }

        this.vykresleni();
    }
    vykresleni() {
        space.innerHTML = ""
        this.htmlprace(this.i);

    }
    htmlprace(cislosekce) {
        space.innerHTML +=
            "<h3>Dotazník týmové role podle Dr. Belbina</h3><br><h4>Rozdělte prosím v každé sekci 10 bodů</h4>" +
            "<p>" + this.sektor[cislosekce].nazev + "</p>"
        for (let i = 0; i < 8; i++) {
            space.innerHTML += "<p><input value ='0' onchange = 'starter.kontrolor()' type='range' id='helper" + i + "' name='points' min='0' max='10'>" + this.sektor[cislosekce].sekce[i] + "</p>"

        }
        space.innerHTML += "<output id ='number'></output> <button onclick = starter.next()>Next</button>"
    }
    next() {
        if (this.i < this.sektor.length - 1) {
            let numero = document.getElementById("number").value
            if (numero == 10) {
                for (let i = 0; i < 8; i++) {
                    let pomoc = this.sektor[this.i].klic[i]
                    switch (pomoc) {
                        case "hledac_zdroju":
                            vyhodnoceni.hledac_zdroju += Number(document.getElementById("helper" + i).value)
                            break;
                        case "tymovy_pracovnik":
                            vyhodnoceni.tymovy_pracovnik += Number(document.getElementById("helper" + i).value)
                            break;
                        case "tvurce":
                            vyhodnoceni.tvurce += Number(document.getElementById("helper" + i).value)
                            break;
                        case "koordinator":
                            vyhodnoceni.koordinator += Number(document.getElementById("helper" + i).value)
                            break;
                        case "dokoncovatel":
                            vyhodnoceni.dokoncovatel += Number(document.getElementById("helper" + i).value)
                            break;
                        case "navigator":
                            vyhodnoceni.navigator += Number(document.getElementById("helper" + i).value)
                            break;
                        case "poradce_hodnotitel":
                            vyhodnoceni.poradce_hodnotitel += Number(document.getElementById("helper" + i).value)
                            break;
                        case "realizator":
                            vyhodnoceni.realizator += Number(document.getElementById("helper" + i).value)
                            break
                        default:
                            break;
                    }
                }
                this.i++;
                this.vykresleni();
            } else {
                alert("Součet ve vaší odpovědi musí dát přesně číslo 10")
            }
        }
        else{
            space.innerHTML=""
            vyhodnoceni.table1creation();
        }
    }

    kontrolor() {
        let cislo = 0
        for (let i = 0; i < 8; i++) {
            cislo += Number(document.getElementById("helper" + i).value)
        }
        document.getElementById("number").value = cislo
    }


}
class Xsekce {
    constructor(nazev, poradi, klic = [], sekce = []) {
        this.poradi = poradi
        this.klic = klic
        this.nazev = nazev
        this.sekce = sekce
    }


}
class Xvyhodnoceni {
    stupne = ["velmi nízká", "nízká", "střední", "vysoká", "velmi vysoká"]
    hledac_zdroju = [3,4,8,11,99]

    constructor(tvurce = 0, hledac_zdroju = 0, koordinator = 0, navigator = 0, poradce_hodnotitel = 0, tymovy_pracovnik = 0, realizator = 0, dokoncovatel = 0) {
        this.tvurce = tvurce
        this.hledac_zdroju = hledac_zdroju
        this.koordinator = koordinator
        this.navigator = navigator
        this.poradce_hodnotitel = poradce_hodnotitel
        this.tymovy_pracovnik = tymovy_pracovnik
        this.realizator = realizator
        this.dokoncovatel = dokoncovatel
    }
    table1creation() {
       space.innerHTML+="<table>"+
       "<tr><th>Tvůrce</th><th>Hledač zdrojů</th><th>Koordinátor</th><th>Navigátor</th><th>Poradce-Hodnotitel</th><th>Týmový pracovník</th><th>Realizátor</th><th>Dokončovatel</th></tr>"+
       "<tr><td>"+this.tvurce+"</td><td>"+this.hledac_zdroju+"</td><td>"+this.koordinator+"</td><td>"+this.navigator+"</td><td>"+this.poradce_hodnotitel+"</td><td>"+this.tymovy_pracovnik+"</td><td>"+this.realizator+"</td><td>"+this.dokoncovatel+"</td></tr>"+
       "<tr><td>"+this.control("tvurce")+"</td><td>"+this.control("hledac_zdroju")+"</td><td>"+this.control("koordinator")+"</td><td>"+this.control("navigator")+"</td><td>"+this.control("poradce_hodnotitel")+"</td><td>"+this.control("tymovy_pracovnik")+"</td><td>"+this.control("realizator")+"</td><td>"+this.control("dokoncovatel")+"</td></tr></table>"

    }

    stupen(skala, body) {
        if (body < skala[0]) {
            return("velmi nízká")
        }
        else if (body < skala[1]){
            return("nízká")
        }
        else if (body < skala[2]){
            return("střední")
        }
        else if (body < skala[3]){
            return("vysoká")
        }
        else if (body < skala[4]){
            return("velmi vysoká")
        }
    }

    control(funkce) {
        let body = 0;
        let skala = [];

        switch (funkce) {
            case "hledac_zdroju":
                body = this.hledac_zdroju;
                skala = [3,4,8,11,99];
                break;
            case "tymovy_pracovnik":
                if (this.tymovy_pracovnik <4) {
                    return("velmi nízká")
                }
                else if (this.tymovy_pracovnik<6){
                    return("nízká")
                }
                else if (this.tymovy_pracovnik<11){
                    return("střední")
                }
                else if (this.tymovy_pracovnik<14){
                    return("vysoká")
                }
                else if (this.tymovy_pracovnik>=14){
                    return("velmi vysoká")
                }
                break;
            case "tvurce":
                if (this.tvurce <2) {
                    return("velmi nízká")
                }
                else if (this.tvurce<4){
                    return("nízká")
                }
                else if (this.tvurce<8){
                    return("střední")
                }
                else if (this.tvurce<10){
                    return("vysoká")
                }
                else if (this.tvurce>=10){
                    return("velmi vysoká")
                }
                break;
            case "koordinator":
                if (this.koordinator <4) {
                    return("velmi nízká")
                }
                else if (this.koordinator<6){
                    return("nízká")
                }
                else if (this.koordinator<10){
                    return("střední")
                }
                else if (this.koordinator<14){
                    return("vysoká")
                }
                else if (this.koordinator>=14){
                    return("velmi vysoká")
                }
                break;
            case "dokoncovatel":
                if (this.dokoncovatel <2) {
                    return("velmi nízká")
                }
                else if (this.dokoncovatel<4){
                    return("nízká")
                }
                else if (this.dokoncovatel<9){
                    return("střední")
                }
                else if (this.dokoncovatel<11){
                    return("vysoká")
                }
                else if (this.dokoncovatel>=11){
                    return("velmi vysoká")
                }
                break;
            case "navigator":
                if (this.navigator <4) {
                    return("velmi nízká")
                }
                else if (this.navigator<7){
                    return("nízká")
                }
                else if (this.navigator<15){
                    return("střední")
                }
                else if (this.navigator<19){
                    return("vysoká")
                }
                else if (this.navigator>=19){
                    return("velmi vysoká")
                }
                break;
            case "poradce_hodnotitel":
                if (this.poradce_hodnotitel <3) {
                    return("velmi nízká")
                }
                else if (this.poradce_hodnotitel<5){
                    return("nízká")
                }
                else if (this.poradce_hodnotitel<10){
                    return("střední")
                }
                else if (this.poradce_hodnotitel<12){
                    return("vysoká")
                }
                else if (this.poradce_hodnotitel>=12){
                    return("velmi vysoká")
                }
                break;
            case "realizator":
                if (this.realizator <6) {
                    return("velmi nízká")
                }
                else if (this.realizator<9){
                    return("nízká")
                }
                else if (this.realizator<13){
                    return("střední")
                }
                else if (this.realizator<16){
                    return("vysoká")
                }
                else if (this.realizator>=16){
                    return("velmi vysoká")
                }
                break
            default:
                break;

        }
        return this.stupen(skala,body);

    }

}
const vyhodnoceni = new Xvyhodnoceni()
const starter = new Xhtml()

