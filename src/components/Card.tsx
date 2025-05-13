export default function Card({card}: {card: string}){

  return (
    <div className="min-w-[200px] h-[140px] border border-black text-3xl text-center">
      <p>
        {card}
      </p>
    </div>
  );
}

