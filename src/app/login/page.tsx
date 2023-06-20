"use client";
import NavbarWithCTAButton from "@/components/global/navbar/Navbar";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import google from "../../assets/images/Google__G__Logo.png";
import useFirebase from "@/hooks/useFirebase";

export default function Login() {
  const { signInWithGoogle } = useFirebase();
  return (
    <>
      <NavbarWithCTAButton />
      <section>
        <div className="h-screen flex justify-center items-center">
          <Card className="w-96">
            <form className="flex flex-col gap-4 ">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" required type="password" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button className="bg-primary hover:bg-secondary" type="submit">
                Sign In
              </Button>
              <Button
                onClick={signInWithGoogle}
                className="bg-white text-black hover:bg-white border-primary hover:opacity-80"
              >
                <Image className="mr-2" alt="" width={25} src={google} /> Sign
                In With Google
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
