import java.util.Scanner;

public class MinimoTres {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce el primer número: ");
        double num1 = scanner.nextDouble();

        System.out.print("Introduce el segundo número: ");
        double num2 = scanner.nextDouble();

        System.out.print("Introduce el tercer número: ");
        double num3 = scanner.nextDouble();

        double minimum = findMinimum(num1, num2, num3);

        System.out.println("El mínimo de " + num1 + ", " + num2 + ", y " + num3 + " es: " + minimum);

        scanner.close();
    }

    public static double findMinimum(double a, double b, double c) {
        return Math.min(Math.min(a, b), c);
    }
}


