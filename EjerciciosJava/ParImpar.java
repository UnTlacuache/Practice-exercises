import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escribe un número: ");
        int number = scanner.nextInt();

        if (number % 2 == 0) {
            System.out.println(number + " es par.");
        } else {
            System.out.println(number + " es impar.");
        }

        scanner.close();
    }
}
