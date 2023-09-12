import java.util.Scanner;

public class PromedioArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de elementos en el rango: ");
        int n = scanner.nextInt();

        double[] numbers = new double[n];

        System.out.println("Introduce los elementos de la función:");
        for (int i = 0; i < n; i++) {
            System.out.print("Elemento  " + (i + 1) + ": ");
            numbers[i] = scanner.nextDouble();
        }

        double sum = 0;
        for (int i = 0; i < n; i++) {
            sum += numbers[i];
        }

        double average = sum / n;

        System.out.println("El promedio de los números es: " + average);

        scanner.close();
    }
}
