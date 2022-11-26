# **Date Formatter TS**

Simple way to format your date. (Written in TS) 

#### **Installation**

```bash
  npm i date-formatter-ts
```

#### **Run locally**

```bash
  # To clone repo
  git clone https://github.com/hsubramani42/date-formatter-ts.git

  # to compile typescript file
  npm run build

  # to run tests
  npm run test
```


#### **Sample Usage**

```javascript
import getFormattedDate from "date-formatter-ts";

// getFormattedDate(date: Date, format: string): string
const formattedDate = getFormattedDate(
    new Date("2022-01-31"),
    "MMM DD, YYYY(WWW)"
);

console.log(formattedDate);

// output: Jan 31, 2022(Sat)
```

**Accepted Date formats**

- Weekday: **WWW** (Ex: Sun,...,Sat), **WWWW** (Ex: Sunday,...,Monday)

- Day: **D** (Ex: 1,2,..,11,12), **DD** (Ex: 01,02,...,11,12)

- Month: **M** (Ex: 1,2,..,11,12), **MM** (Ex: 01,02,...,11,12), **MMM** (Ex: Jan,..,Dec), **MMMM** (Ex: January,..,December)

- Year: **YY** (Ex: 90,...,22), **YYYY** (Ex: 1990,..,2022)


**Special Note**: 
- Format is case insensitive.
- All special characters are allowed
- Alphabets other than d, m, w, y are not allowed
- Invalid formats always throws TypeError

#
#### **Libraries Used**

Dev Dependencies: TypeScript, Jest, Babel

#
#### **Authors**

-   H Subramani **(**[@hsubramani42](https://www.github.com/hsubramani42)**)**
#
#### **License**

This project is licensed under [MIT](https://choosealicense.com/licenses/mit/)
