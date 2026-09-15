function Landing() {
  return (
    <div className="p-16 h-dvh flex flex-col justify-between">
      <div>
        <h1 className="text-primary text-9xl font-bartle">James Mather</h1>
        <p className="text-4xl">
          lorem ipsum dolor sit amet consectetur adipiscing elit tempor deleniti in minim aute
          dolore magna voluptatum
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <p>Contact me</p>
        <p className="font-semibold text-xl">Scroll for more</p>
        <div>
          <p>Brighton</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
