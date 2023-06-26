using System;
using System.IO;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {
        // Lettura del file
        string origineHead = File.ReadAllText("pagina.txt");

        // Regex per trovare il titolo
        var titlePattern = "<title>(.*?)</title>";
        var regex = new Regex(titlePattern);

        // Modifica del titolo
        string nuovoTitolo = "Ciccio";
        string neworigineHead = regex.Replace(origineHead, $"<title>{nuovoTitolo}</title>");

        // Scrittura del nuovo contenuto in un nuovo file
        File.WriteAllText("paginaModificata.html", neworigineHead);

        Console.WriteLine("Il titolo è stato modificato con successo");
    }
}