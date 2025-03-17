import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type ClimateAnalysisCardProps = {
  title: string;
  description: string;
};

export function ClimateAnalysisCard({
  title,
  description,
}: ClimateAnalysisCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Card className="w-full max-w-xs shadow-none cursor-pointer">
          {/* <CardHeader className="flex flex-row items-center justify-between py-2">
        <div className="flex items-center gap-3"> */}
          {/* <Image
            src="https://github.com/shadcn.png"
            className="h-8 w-8 rounded-full bg-secondary object-contain"
            alt=""
            height={32}
            width={32}
          /> */}
          {/* <div className="flex flex-col gap-0.5">
            <h6 className="text-md leading-none font-medium">{title}</h6>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
        </Button>
      </CardHeader> */}

          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted border-y" />
            <div className="pt-3 pb-4 px-6">
              <h2 className="font-semibold text-md">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </CardContent>
          {/* <Separator /> */}
          {/* <CardFooter className="flex py-2 px-2">
        <Button variant="ghost" className="w-full text-muted-foreground">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button variant="ghost" className="w-ful text-muted-foreground">
          <MessageCircleIcon />
          <span className="hidden sm:inline">Comment</span>
        </Button>
        <Button variant="ghost" className="w-full text-muted-foreground">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
      </CardFooter> */}
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <Image
          src="/images/placeholderHover.png"
          alt="placeholder"
          width={480}
          height={270}
        />
      </HoverCardContent>
    </HoverCard>
  );
}
