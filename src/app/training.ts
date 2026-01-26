interface IUser {
    name: string;
    age: number;
    firstName: string;
    email?: string; 
}

interface IEmployee extends IUser {
    post: string;
    salary: number;
}

export const sum = (a: number, b: number): number => {
    return a + b;
}

sum(5, 5);

type Status = "loading" | "success" | "error";

let status: Status;

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

let textFormat: TextFormat;

const formatText = (text: string, format: TextFormat): string => {
    switch (format) {
        case "uppercase":
            return text.toUpperCase();
        case "lowercase":
            return text.toLowerCase();
        case "capitalize":
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        default: 
            return text;
    }
}

formatText("Salam", "uppercase");

const removeSymbol = (text: string, symbol: string): string => {
  return text.replaceAll(symbol, "");
}

removeSymbol("Vlad", "V");

const users: IUser[] = [
  {
    name: 'Nakir',
    age: 20,
    firstName: 'Nakirovich'
  },
  {
    name: 'Vlad',
    age: 23,
    firstName: 'Anatolevich'
  }
];

const filterUsers: IUser[] = users.filter(user => user.firstName === 'Nakirovich');