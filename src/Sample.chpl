module Sample {
    class Sample {
        proc doGoodStuff() : atomic int {
            var sum : atomic int;
            
            forall i in 1..10000 {
                sum.add(i);
            }

            return sum;
        }
    }
}