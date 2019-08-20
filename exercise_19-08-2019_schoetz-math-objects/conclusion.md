# Conclusion 

## Explaining how to make a dice

To make a dice, we need a random number generator. The .js method for is `Math.random` and creates a random number between 1 and 0 when executed. However, it will always be below 1.0.<br>
To get numbers above 1. we have to multiply the random number, in our case by 6 (e. g. 0.9*6 = 5.4).<br>
Finally, since we only need integer numbers, we round up the number by using the method `Math.ceil`.

You can also round down but since a dice has no 0, we have to set an off-set to the number first by adding +1 to the calculation.