import java.math.*;
import java.util.Scanner;

public class RSAUtils {

    public static void main(String[] args) {

        // Create 3 BigInteger objects
        BigInteger biginteger1, biginteger2, result;

        // Initializing all BigInteger Objects
        biginteger1 = new BigInteger(args[0]);
        biginteger2 = new BigInteger(args[1]);
        BigInteger exponent = new BigInteger(args[2]);

        // Perform modPow operation on the objects and exponent
        result = biginteger1.modPow(exponent, biginteger2);
        // Displaying the result
        System.out.println(result.toString(16));
    }
}