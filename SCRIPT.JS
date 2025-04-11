import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        // Create scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        
        // Declare variables to store account information
        int numero;
        String agencia;
        String nomeCliente;
        double saldo;
        
        // Request and read account number
        System.out.println("Por favor, digite o número da Conta!");
        numero = scanner.nextInt();
        
        // Consume the remaining newline
        scanner.nextLine();
        
        // Request and read agency
        System.out.println("Por favor, digite o número da Agência!");
        agencia = scanner.nextLine();
        
        // Request and read client name
        System.out.println("Por favor, digite o seu Nome!");
        nomeCliente = scanner.nextLine();
        
        // Request and read balance
        System.out.println("Por favor, digite o Saldo!");
        saldo = scanner.nextDouble();
        
        // Close the scanner
        scanner.close();
        
        // Display the formatted message with concatenation
        String message = "Olá " + nomeCliente + ", obrigado por criar uma conta em nosso banco, " +
                         "sua agência é " + agencia + ", conta " + numero + " e seu saldo " + 
                         saldo + " já está disponível para saque";
        
        // Alternative using String.concat()
        // String message = "Olá ".concat(nomeCliente).concat(", obrigado por criar uma conta em nosso banco, ")
        //                 .concat("sua agência é ").concat(agencia).concat(", conta ").concat(String.valueOf(numero))
        //                 .concat(" e seu saldo ").concat(String.valueOf(saldo)).concat(" já está disponível para saque");
        
        System.out.println(message);
    }
}
