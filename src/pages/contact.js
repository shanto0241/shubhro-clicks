import RootLayout from "@/components/layout/RootLayout";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="w-9/12 pt-10 mx-auto h-screen flex gap-2 mt-20">
        <div className="w-full text-center">
          <h1 className="text-4xl text-base-100 text-start font-semibold">
            Say hello
          </h1>
          <br />
          <form className="grid gap-2">
            <input
              type="text"
              className="border border-1 border-black p-2 bg-slate-50 "
              placeholder="Enter name"
              name="name"
              required
            />
            <input
              type="text"
              className="border border-1 border-black p-2 bg-slate-50 "
              placeholder="Enter email"
              name="email"
              required
            />
            <input
              type="textarea"
              className="border border-1 border-black p-2 bg-slate-50 w-full h-24"
              placeholder="Enter message"
              name="message"
            />
            <input type="submit" className="border p-2 border-base-100" />
          </form>
        </div>
        <div className="w-full ">
          <h1 className="text-4xl text-base-100 text-end font-semibold">
            Contact me!
          </h1>
          <br />
          <h1 className="text-sm text-base-100 pl-4 text-end font-semibold">
            Available for assignment reportage, news & portraiture; digital &
            analogue.{" "}
          </h1>
          <br />
          <h1 className="text-2xl text-base-100 text-end font-mono">
            “This site is operated by Shubhro Sinha”
          </h1>
          <br />
          <br />

          <h1 className="text-sm text-base-100 text-end font-mono">
            Contact number: +88 01921186080
          </h1>
          <h1 className="text-sm text-base-100 text-end font-mono">
            Email: AKASHPHOTO@GMAIL.COM
          </h1>
          <h1 className="text-sm text-base-100 text-end font-mono">
            Tanbazar, Narayanganj-1400, Bangladesh
          </h1>
          <h1 className="text-sm text-base-100 text-end font-mono">
            Tanbazar, Narayanganj-1400, Bangladesh
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
