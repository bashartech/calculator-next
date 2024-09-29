"use client";
import { useState, ChangeEvent } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
  };
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
  };
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };
  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };
  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };
  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div>
      <div className="main">
        <div className="box">
          <h1>Simple Calculator</h1>
          <div className="input">
            <div className="num1">
              <Label htmlFor="num1">Number 1</Label>
              <Input
                type="text"
                id="num1"
                onChange={handleNum1Change}
                placeholder="Enter a number"
              />
            </div>
            <div className="num2">
              <Label htmlFor="num2">Number 2</Label>
              <Input
                type="text"
                id="num2"
                onChange={handleNum2Change}
                placeholder="Enter a number"
              />
            </div>
           
          </div>
          <div className="operators">
            {/* <Label htmlFor="num1">Number 1</Label> */}
            <Button onClick={add}>+</Button>
            <Button onClick={subtract}>-</Button>
            <Button onClick={multiply}>*</Button>
            <Button onClick={divide}>/</Button>
          </div>
          <div className="reset">
            <div className="last">
            <div className="result">
            <Label htmlFor="result">Result</Label>
            <Input id="result" value={result} placeholder="result" readOnly />
           </div>
           <div className="btn">
            <Button variant="outline" className="w-full" onClick={clear}>
              Clear
            </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
