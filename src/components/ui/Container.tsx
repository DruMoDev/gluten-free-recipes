export default function Container({children}: Readonly<{children: React.ReactNode;}>) {
  return <div className="max-w-screen-lg px-4 2xl:max-w-screen-2xl mx-auto">{children}</div>;
}