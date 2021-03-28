#include <iostream>
//================================================================== 1 задание =================================================================================
using namespace std;

class Figure
{
public:
    virtual void area() = 0;
};

class Parallelogram : public Figure
{
protected:
    int base;       
    int height;     
public:

    Parallelogram(int value_base, int value_height) :base(value_base), height(value_height)
    {

    }
    void area() override
    {
        cout << "The parallelogram area is " << base * height << endl;
    }
};

class Circle : public Figure
{
    double radius;
    double P;
public:
    Circle(double value_radius) : radius(value_radius) 
    {
        P = 3.1415;

    }
    void area() override
    {
        cout << "The area of the circle is " << 3.1415 * (radius * radius) << endl;
    }
};

class Rectangle : public Parallelogram
{
public:
    Rectangle(int value_base, int value_height) : Parallelogram(value_base, value_height) 
    {

    }
    void area() override
    {
        cout << "The area of the triangle is " << base * height << endl;
    }
};

class Square : public Parallelogram
{
public:

    Square(int value_base, int value_height) : Parallelogram(value_base, value_height) 
    {

    }

    void area() override
    {
        cout << "The square area is " << base * height << endl;
    }
};

class Rhombus : public Parallelogram
{
public:
    Rhombus(int value_base, int value_height) : Parallelogram(value_base, value_height) 
    {

    }
    void area() override
    {
        cout << "The area of the rhombus is " << base * height << endl;
    }
};
//====================================================================== 2 задание ===================================================================================
class  Car
{
protected:
    string company;
    string model;
public:
    Car() {

    }
     Car(string c, string m) :company(c), model(m)
    {
        
    }
     string getcompany() 
     { 
         return company; 
     }
     string getmodel()
     {
         return model;
     }
};

class PassengerCar : virtual public Car
{
public:
    PassengerCar(string c, string m) : Car(c, m) 
    {
        
    }
    string getcompany()
    {
        return company;
    }
    string getmodel()
    {
        return model;
    }
};

class Bus : virtual public Car
{
public:
    Bus(string c, string m) : Car(c, m) 
    {
        
    }
    string getcompany()
    {
        return company;
    }
    string getmodel()
    {
        return model;
    }
};
class Minivan : public PassengerCar, public Bus 
{
public: 
    Minivan(string c, string m) : PassengerCar(c, m), Bus(c, m)
    {
        
    }
    string getcompany()
    {
        return company;
    }
    string getmodel()
    {
        return model;
    }
};
//=============================================================== 3 задание =================================================================================

class Fraction 
{
private:
    int numerator;
    int denominator;
public:
    Fraction() :numerator(0), denominator(1) 
    {

    }
    Fraction(int numerator, int denominator) 
    {
        this->numerator = numerator;
        this->denominator = denominator;
    }
    double getValue() const 
    {
        return (double)numerator / denominator;
    }
    friend Fraction operator+ (const Fraction& f1, const Fraction& f2);
};

Fraction operator+ (const Fraction& f1, const Fraction& f2) 
{
    int a = f2.denominator * f1.numerator;
    int b = f1.denominator * f2.numerator;
    int c = f1.denominator * f2.denominator;
    return Fraction(a + b, c);
}
//========================================================= 4 задание ==============================================================================
class Card
{
   
    friend ostream& operator<< (ostream& os, const Card& aCard);

public:
    enum rank 
    {
        ACE = 1, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN,
        JACK, QUEEN, KING
    };
    enum suit { CLUBS, DIAMONDS, HEARTS, SPADES };

    Card(rank r = ACE, suit s = SPADES, bool ifu = true);

    
    int GetValue() const;

    void Flip();

private:
    rank m_Rank;
    suit m_Suit;
    bool m_IsFaceUp;
};

Card::Card(rank r, suit s, bool ifu) : m_Rank(r), m_Suit(s), m_IsFaceUp(ifu) 
{

}

int Card::GetValue() const
{
    
    int value = 0;
    if (m_IsFaceUp)
    {
        
        value = m_Rank;
      
        if (value > 10)
        {
            value = 10;
        }
    }

    return value;
}

void Card::Flip()
{
    m_IsFaceUp = !(m_IsFaceUp);
}
int main()
{
    Rhombus rhombus(10, 15);
    rhombus.area();
    Circle circle(3.1415);
    circle.area();
    Car car("mercedes", "Maybach");
    PassengerCar pcar("bmw", "x5");
    Bus bus("Mercedes-Benz", "Sprinter");
    Minivan minivan("Volkswagen", "Multivan T5");
    cout << car.getcompany() << endl;
    cout << pcar.getcompany() << endl;
    Fraction f1(3, 7);
    Fraction f2(9, 2);
    Fraction f3 = f1 + f2;
    cout << f3.getValue() << endl;


}
