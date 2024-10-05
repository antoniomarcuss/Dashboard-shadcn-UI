import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightLeft, ChartNoAxesCombined, Eye, User } from "lucide-react";

const Cards = () => {
  const card = [
    {
      id: 1,
      title: " Receita do mês atual",
      icon: <ChartNoAxesCombined />,
      class: "from-orange-600 to-red-400 bg-gradient-to-r",
      total: "$12,456",
      description: "  5% maior que mês passado",
    },
    {
      id: 2,
      title: " Total de visitantes",
      icon: <Eye />,
      class: "from-indigo-800 to-indigo-400 bg-gradient-to-r",
      total: "1456,056",
      description: "  9% maior que mês passado",
    },
    {
      id: 3,
      title: " Total de feedbacks",
      icon: <ArrowRightLeft />,
      class: "from-green-500 to-cyan-400 bg-gradient-to-r",
      total: "2,300",
      description: "  3% menor que mês passado",
    },
    {
      id: 4,
      title: " Usuários ativos",
      icon: <User />,
      class: "from-pink-500 to-purple-700 bg-gradient-to-r",
      total: "10.000 mil",
      description: "  13% maior que mês passado",
    },
  ];
  return (
    <>
      {card.map((item) => (
        <Card
          key={item.id}
          className=" w-full max-w-96 md:h-60  shadow-lg rounded-lg dark:border-gray-500"
        >
          <CardHeader className={`${item.class} rounded-t-md `}>
            <CardTitle className="flex items-center justify-between  text-white ">
              <span className="text-xs max-w-40 w-full   sm:text-sm ">
                {item.title}
              </span>
              {item.icon}
            </CardTitle>
          </CardHeader>
          <CardContent className=" flex justify-center items-center p-6 ">
            <span className="text-xl sm:text-3xl text-gray-500 dark:text-gray-100 ">
              {item.total}
            </span>
          </CardContent>
          <CardFooter className=" flex items-center justify-center p-2">
            <span className="tracking-tighter text-xs sm:text-base text-gray-500 dark:text-gray-300">
              {item.description}
            </span>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Cards;
