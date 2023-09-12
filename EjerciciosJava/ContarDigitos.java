import java.util.Scanner;

public class ContarDigitos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un número entero: ");
        int number = scanner.nextInt();

        String numberAsString = String.valueOf(number);
        int numberOfDigits = numberAsString.length();

        System.out.println("El número de dígitos en " + number + " es: " + numberOfDigits);

        scanner.close();
    }
}
