import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Random Number Generator Program");
		System.out.println("--------------------------------");
			
		while (true) {
			int min, max;
			
			System.out.print("\nEnter a minimum value : ");
			min = scan.nextInt();
			System.out.print("Enter a maximum value : ");
			max = scan.nextInt();
			
			if (min >= max) {
				System.out.println("\nMinimum value cannot be greater or equal the maximum value");
				continue;
			}
			
			int randomNum = min + (int)(Math.random() * (max - min));
			
			System.out.println("\nRandom number generated : " + randomNum);
			
			System.out.print("\nDo you want to keep generating numbers? (y/n) : ");
			char choice = scan.next().charAt(0);
			
			if (choice == 'n' || choice == 'N') {
				System.out.println("\nProgram terminated...");
				break;
			} else {
				continue;
			}
		}

	}

}
