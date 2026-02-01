import styles from "./order.module.css"
function order() {
    return (
        <main className={styles.main}>
            <div className={styles.left}>
                <h1 className={styles.h1}>Jak zamowic ?</h1>
                <p className={styles.text}>
                    Masz kilka sposobów, aby zamówić składanie komputera u mnie:<br></br><br></br>
1: Masz już gotową konfigurację
Jeśli już wiesz, jakie komponenty chcesz, podpisujemy z Tobą umowę online, a następnie przesyłasz mi swoją konfigurację. Potem możesz wysłać lub zamówić pod mój adres komponenty, ja sprawdzam ich działanie, składam komputer, instaluję system Windows (bez aktywacji), aktywuję profil XMP i wykonuję undervolting procesora (zmniejszenie napięcia przy zachowaniu pełnej wydajności, co skutkuje niższą temperaturą CPU). Następnie instaluję sterowniki i wykonuję testy stresowe, aby upewnić się, że wszystko działa stabilnie.
 Cena usługi: 250 zł dla komputerów do 4500 zł, powyżej 4500 zł - 7% wartości komputera.
<br/><br></br>
2: Wybierasz procesor + kartę graficzną
Podajesz mi parę procesor + GPU, podpisujemy umowę, a ja dobieram pozostałe komponenty tak, aby najlepiej pasowały do Twojego budżetu i potrzeb. Następnie składam komputer i wykonuję wszystkie czynności z opcji 1

 Cena usługi: 300 zł dla komputerów do 4500 zł, powyżej 4500 zł - 8% wartości komponentów.<br/><br></br>
3: Nie wiesz, jaki procesor + karta graficzna będą najlepsze
Mówisz mi swoje potrzeby - ja proponuję odpowiednią parę CPU + GPU, podpisujemy umowę, a ja dobieram całą konfigurację i składam komputer tak jak w opcji 1.
 Cena usługi: 300 zł dla komputerów do 4500 zł, powyżej 4500 zł -8% wartości komponentów.<br></br><br></br>
Aby złożyć zamówienie, zapraszam do kontaktu!




                </p>
            </div>
            <div className={styles.left}>
                <h1 className={styles.h1}>Dlaczego warto ?</h1>
                <p className={styles.text}>



                    Nie kupujesz gotowego komputera z dużą marżą - kupujesz podzespoły po cenach rynkowych i płacisz osobno tylko za usługę składania.
<br/><br></br>
Możesz otwierać obudowę, robić upgrade i personalizować PC bez utraty gwarancji, bo każdy komponent ma swoją własną gwarancję, a nie cały komputer jako całość.
<br/><br></br>
Dokładnie wiesz, jakie podzespoły są w Twoim komputerze, a nie tylko przybliżone parametry. W gotowych zestawach często podany jest np. zasilacz 650W, ale producent i model pozostają tajemnicą - u mnie wszystko jest jawne i sprawdzone.
<br/><br></br>
Pomagam stworzyć zbalansowany zestaw dokładnie pod Twój budżet i potrzeby, oszczędzając tam, gdzie można, i inwestując w najważniejsze elementy.
<br/><br></br>
Podpowiadam, gdzie można kupić podzespoły taniej.
<br/><br></br>
W cenie składania instaluję system i całe niezbędne oprogramowanie.
<br/><br></br>
Testuję podzespoły, aby upewnić się, że działają stabilnie, i wykonuję undervolting procesora, żeby obniżyć temperaturę.
<br/><br></br>
Ustawiam profile wentylatorów (jeśli to możliwe), żeby zapewnić optymalny balans między ciszą a chłodzeniem.
                </p>
            </div>
        </main>
    );
}

export default order;