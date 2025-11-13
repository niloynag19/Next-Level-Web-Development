

type Product = {
    id: number,
    name: string,
    price: string,
    stock: number,
    color?: string
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;
// kisu optional proprety niya

type ProductWithoutStock = Omit<Product, "stock" | "color">;
// kisu optional property bad diya

type ProductWithColor = Required <Product>
// sob property add kora

const product:ProductWithColor={
    id:123,
    name:"mouse",
    price:"1000",
    stock:120,
    color:"Black"
}

type OptionalProduct=Partial<Product>;
// kono product er sob property optional kore dai

type ProductReadonly=Readonly<Product>
// kono product er sob property readonly kore dai.ata poriborton kora jai na


const emptyObj:Record<string,unknown>={}
// Record<string,unknown> holo amon object type ja key hobe string and value hobe unknown