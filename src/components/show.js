// Greeting.jsx
import React from 'react';
import bird from '../assets/bird.png';

/*
function Itemdesc(props) {
  return (
    <h1>Hello, {props.name}! Welcome to React.</h1>
  );
}
*/
function Chdg() {
  return (
    <h2 className="text-2xl font-bold text-black text-center mb-3">
      My favorite Customers (Click on Thumbnail)
    </h2>
  );
}


const list = [
  { id: 1, customer: 'Arnie', item: 'shirt-m', cost: 79.99, itempic: 4 },
  { id: 2, customer: 'Ben', item: 'shirt-lg', cost: 69.99, itempic: 4 },
  {
    id: 3,
    customer: 'Jack',
    item: 'attire',
    cost: 200.99,
    itempic: 2,
  },
  {
    id: 4,
    customer: 'Jack',
    item: 'pants',
    cost: 55.99,
    itempic: 3,
  },
];

const CustomerList = ({ onImageClick }) => {
  // Helper function to get image URL by itempic
  const getImageUrl = (itempic) => {
    const found = nlist.find(item => item.keyn === itempic);
    return found ? found.value : '';
  };

  return (
  <div className="bg-white rounded-xl shadow-lg p-6 w-[640px] h-[28rem] overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Cost</th>
            <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item Pic</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map((item) => {
            const imageUrl = getImageUrl(item.itempic);
            return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-black">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-black">{item.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-black">{item.item}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-black">${item.cost.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {imageUrl && (
                    <button 
                      onClick={() => onImageClick(item.itempic)}
                      className="hover:opacity-75 transition-opacity"
                    >
                      <img 
                        src={imageUrl} 
                        alt={`${item.item} preview`} 
                        className="h-12 w-12 object-cover rounded"
                      />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Itemdesc = ({ selectedPic }) => {
  // Find the image URL based on selectedPic
  const selectedImage = nlist.find(item => item.keyn === selectedPic)?.value || bird;
  
  return (
  <div className="rounded-xl shadow-lg pt-0 px-6 pb-6 h-auto max-h-[60vh] md:h-[28rem] md:max-h-none w-[36rem] flex items-start justify-center overflow-hidden">
      <img
        src={selectedImage}
        alt={selectedImage === bird ? "Default item (bird)" : "Selected item preview"}
        className="max-h-full w-full object-contain self-start"
      />
    </div>
  );
};

const App = () => {
  const [selectedItemPic, setSelectedItemPic] = React.useState(null);

  const handleImageClick = (itemPic) => {
    setSelectedItemPic(itemPic);
  };

  return (
    <div className="min-h-screen bg-green-500 pt-1 md:pt-3 px-6 md:px-10 pb-8">
      <div className="w-full max-w-6xl mx-auto">
        <Chdg />
        <div className="flex w-full items-start justify-evenly gap-8">
          <div className="flex flex-col items-center">
            <CustomerList onImageClick={handleImageClick} />
          </div>
          <Itemdesc selectedPic={selectedItemPic} />
        </div>
      </div>
    </div>
  );
};

const pic1 =
  bird;

const pic2 =
  'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfPants.jpg';

const pic3 =
  'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/justPants.jpg';

const pic4 =
  'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfShirt.jpg';

const nlist = [
  { keyn: 1, value: pic1 },
  { keyn: 2, value: pic2 },
  { keyn: 3, value: pic3 },
  { keyn: 4, value: pic4 },
];

export { CustomerList, App };
export default Itemdesc;
