import java.util.Scanner;

public class ChecarNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce un número: ");
        double number = scanner.nextDouble();

        if (number > 0) {
            System.out.println(number + " es positivo.");
        } else if (number < 0) {
            System.out.println(number + " es negativo.");
        } else {
            System.out.println("El número es cero.");
        }

        scanner.close();
    }
}
