var img = document.querySelector("img"),
    p = document.querySelector("p");

// Jeżeli SVG nie jest wspierane
img.src = img.src.replace(".svg", ".png"); //do wykorzystania na przykład gdy domyślnie mamy witrynę, na której grafika znajdune się w .svg
//gdybyśmy napisali skrypt, który to weryfikuje bardzo łatwo będzie zamienić .svg na .png (logo.svg --> logo.png)

//p.innerHTML = p.textContent.replace(/\*\*/g, " -- "); // wybierz tekst z akapitu i wyszukaj ** jeżeli je znajdziesz to zamień na --   --> tu też ważna jest flaga g
// gdybyśmy jej nie dali zostaną znalezione tylko pierwsze ** i jeżeli są kolejne w stringu to nie będą wzięte pod uwagę, gdy flaga g jest to zostaną wzięte pod uwagę wszystkie wystapienia w stringu

//p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); // wyrażenie regularne wyłapuje to co jest miedzy ** ** --> jakis tekst **to jest treść w markdownie** a tutaj dalej jakiś tekst i **znów** 
// **to jest treść w markdownie**   --> to jest dopasowanie 
// to jest treść w markdownie       --> to jest grupa dostępna pod $1  -- wszystkie anchors są dostępne dla funcji replace

p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, function(match, p1, p2, offset, string) {
    //console.log("dopasowanie: " + match); // --> dopasowanie **to jest treść w markdownie**
    //console.log("grupa: " + p1); // --> gupa    to jest treść w markdownie
    //console.log("grupa: " + p2); // --> gupa    znów
    //console.log("offset: " + offset); // --> po ilu znakach zaczyna się string zgodny z tym co jest zadeklarowane w wyrażeniu regularnym  --> 12
    //console.log("string: " + string); // --> zwraca całego niezmodyfikowanego stringa --> jakis tekst **to jest treść w markdownie** a tutaj dalej jakiś tekst i **znów**

    // console.log(arguments);

    var captured = [].slice.call(arguments, 1, 2); // przechwycamy wszystkie argumenty i wybieramy to co jest odpowiedzialne za grupę dzięki czemu otrzymujemy 
    // ['to jest treść w markdownie']

    console.log(arguments); // ['**to jest treść w markdownie**', 'to jest treść w markdownie', 12, 'jakis tekst **to jest treść w markdownie** a tutaj dalej jakiś tekst i **znów**'
    console.log("Captured: " + captured); // to jest treść w markdownie

    console.log(captured[0]); //wybieramy indeks 0 ay przy wyświetlaniu pokazać zawartość tablicy --> to jest treść w markdownie

    return "<b>" + captured[0].toUpperCase() + "</b>"; // TO JEST TREŚĆ W MARKDOWNIE


}); //wszystko dzieje się w pętli więc nie trzeba się odwoływać do każdego elementu grupy osobno - p1, p2... n 

// rezultat w html:  jakis tekst TO JEST TREŚĆ W MARKDOWNIE a tutaj dalej jakiś tekst i ZNÓW