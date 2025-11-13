

type a = null;
type b = undefined;

type c = a extends number ? true : b extends b ? true : false;

type RichPeopleVehicle = {
    bike: string,
    car: string,
    ship: string
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false

type HasBike = CheckVehicle<"Tractor">