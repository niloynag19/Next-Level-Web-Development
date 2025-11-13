

type RichPeople={
    car:string,
    bike:string,
    cng:string
}

type myVehicle1="bike"|"car"|"cng";

type myVehicle2=keyof RichPeople;

const any:myVehicle1="bike";
const any2:myVehicle2="car";