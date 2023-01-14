public class Circle {
    private double radius;
    private static final double PI = 3.14;
    
    // Constructor that takes the radius as an input
    public Circle(double radius) {
        this.radius = radius;
    }
    
    // Mutator method for the radius field
    public void setRadius(double radius) {
        this.radius = radius;
    }
    
    // Accessor method for the radius field
    public double getRadius() {
        return radius;
    }
    
    // Accessor method for the diameter field
    public double getDiameter() {
        return radius * 2;
    }
    
    // Accessor method for the circumference field
    public double getCircumference() {
        return 2 * PI * radius;
    }
    
    // Accessor method for the area field
    public double getArea() {
        return PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the radius of the circle:");
        double radius = sc.nextDouble();
        Circle circle = new Circle(radius);
        
        System.out.println("Diameter: " + circle.getDiameter());
        System.out.println("Circumference: " + circle.getCircumference());
        System.out.println("Area: " + circle.getArea());
    }
}
