import java.util.Scanner;

public class SumaDeDos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce un número: ");
        int number = scanner.nextInt();

        int sum = calculateSumOfDigits(number);

        System.out.println("La suma de los dígitos de " + number + " es: " + sum);

        scanner.close();
    }

    public static int calculateSumOfDigits(int num) {
        int sum = 0;

        while (num != 0) {
            int digit = num % 10;

            sum += digit;

            num /= 10;
        }

        return sum;
    }
}
