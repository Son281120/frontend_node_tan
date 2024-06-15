import { Product } from "@/types/product";
import { Minus, PackageOpen, Plus } from "lucide-react";
import Image from "next/image";

type TableCartProps = {
  cart: Product[];
  handleDecrease: (productId: string) => void;
  handleIncrease: (productId: string) => void;
  totalAmount: number;
};
export default function TableCart(props: TableCartProps) {
  const { cart, handleDecrease, handleIncrease, totalAmount } = props;
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Price</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b">Quantity</th>
          <th className="py-2 px-4 border-b">Image</th>
        </tr>
      </thead>
      {cart.length !== 0 ? (
        <tbody>
          {cart.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100 border-b">
              <td className="py-2 px-4 ">{product.name}</td>
              <td className="py-2 px-4 ">{product.price}</td>
              <td className="py-2 px-4 ">{product.description}</td>
              <td className="py-[23px] px-4  flex items-center">
                <button
                  onClick={() => handleDecrease(product._id)}
                  className={`px-2 py-1 border rounded ${
                    product.buyQuantity! <= 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={product.buyQuantity! <= 1}
                >
                  <Minus size={"16px"} />
                </button>
                <span className="mx-2">{product.buyQuantity}</span>
                <button
                  onClick={() => handleIncrease(product._id)}
                  className={`px-2 py-1 border rounded ${
                    product.buyQuantity! >= product.quantity
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={product.buyQuantity! >= product.quantity}
                >
                  <Plus size={"16px"} />
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                  height={64}
                  width={64}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} className="py-2 px-4 text-right font-bold">
              Total Amount
            </td>
            <td colSpan={2} className="py-2 px-4 border-t font-bold">
              {totalAmount}
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          <tr className="hover:bg-gray-100 border-b">
            <td colSpan={5} className="py-16 px-4 text-center">
              <div className="flex justify-center items-center">
                <span className="pr-2">
                  Không có sản phẩm nào trong giỏ hàng
                </span>
                <PackageOpen className="inline-block h-6 w-6 text-gray-500" />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="py-2 px-4 text-right font-bold">
              Total Amount
            </td>
            <td colSpan={2} className="py-2 px-4 border-t font-bold">
              {totalAmount}
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
