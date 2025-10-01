import PageLayout from "@/components/layouts/PageLayout";
import Link from "next/link";
import { BsGoogle, BsStar, BsStarFill } from "react-icons/bs";

export default async function ReviewsSection() {
  const placeData = await fetch(
    `https://places.googleapis.com/v1/places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik?key=${process.env.GOOGLE_MAPS_KEY}&fields=id,googleMapsLinks,displayName,rating,userRatingCount,reviews`
  ).then((res) => res.json());
  //   const placeData = JSON.parse(`{
  //     "id": "ChIJ0VGZsrR7ToYRwqTnAM8c6ik",
  //     "rating": 5,
  //     "userRatingCount": 87,
  //     "displayName": {
  //         "text": "Bamboo Hibachi Private Hibachi Chef Experience",
  //         "languageCode": "en"
  //     },
  //     "reviews": [
  //         {
  //             "name": "places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik/reviews/Ci9DQUlRQUNvZENodHljRjlvT2tSMVZHRkNlR0l0VWpkTVMwZDNWV3M1ZVhNNE5tYxAB",
  //             "relativePublishTimeDescription": "a week ago",
  //             "rating": 5,
  //             "text": {
  //                 "text": "AZ was awesome, he had some great surprises and kept us entertained the whole time. Highly recommend!",
  //                 "languageCode": "en"
  //             },
  //             "originalText": {
  //                 "text": "AZ was awesome, he had some great surprises and kept us entertained the whole time. Highly recommend!",
  //                 "languageCode": "en"
  //             },
  //             "authorAttribution": {
  //                 "displayName": "Shaylon Elmore",
  //                 "uri": "https://www.google.com/maps/contrib/107226911367416810455/reviews",
  //                 "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVivbuFQpMA7h7l8r-Lz1bVV_HU4CLkkOU3j_DHSt4sVUPQvMlM=s128-c0x00000000-cc-rp-mo"
  //             },
  //             "publishTime": "2025-08-31T01:57:57.097777843Z",
  //             "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2tSMVZHRkNlR0l0VWpkTVMwZDNWV3M1ZVhNNE5tYxAB&d=17924085&t=1",
  //             "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tSMVZHRkNlR0l0VWpkTVMwZDNWV3M1ZVhNNE5tYxAB!2m1!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2"
  //         },
  //         {
  //             "name": "places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik/reviews/Ci9DQUlRQUNvZENodHljRjlvT25adlZ6aGFVRGRsVjFrMWIyZDNaRmRKVTNOSGRuYxAB",
  //             "relativePublishTimeDescription": "2 months ago",
  //             "rating": 5,
  //             "text": {
  //                 "text": "AZ and Rocky were awesome! Elevated our family hang out to a whole new level. The food was also 5 stars but without them the night wouldn’t have been as fun!!!",
  //                 "languageCode": "en"
  //             },
  //             "originalText": {
  //                 "text": "AZ and Rocky were awesome! Elevated our family hang out to a whole new level. The food was also 5 stars but without them the night wouldn’t have been as fun!!!",
  //                 "languageCode": "en"
  //             },
  //             "authorAttribution": {
  //                 "displayName": "Sunil Lakhani",
  //                 "uri": "https://www.google.com/maps/contrib/103126431669941445958/reviews",
  //                 "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIFe_HodHN9M-hkRuAseQFRpslnYlYFNP5uZT6ae7bxfLqyhw=s128-c0x00000000-cc-rp-mo-ba2"
  //             },
  //             "publishTime": "2025-06-20T01:56:57.296900244Z",
  //             "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT25adlZ6aGFVRGRsVjFrMWIyZDNaRmRKVTNOSGRuYxAB&d=17924085&t=1",
  //             "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25adlZ6aGFVRGRsVjFrMWIyZDNaRmRKVTNOSGRuYxAB!2m1!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2"
  //         },
  //         {
  //             "name": "places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik/reviews/Ci9DQUlRQUNvZENodHljRjlvT2tWNmVITndNbFZGU0doTFFuZE5WM1JHZGxRMGQwRRAB",
  //             "relativePublishTimeDescription": "2 months ago",
  //             "rating": 5,
  //             "text": {
  //                 "text": "AZ was great. Amazing food/drinks and amazing games/show. Definitely an experience you must try with a bunch of your friends ... It was a great time!",
  //                 "languageCode": "en"
  //             },
  //             "originalText": {
  //                 "text": "AZ was great. Amazing food/drinks and amazing games/show. Definitely an experience you must try with a bunch of your friends ... It was a great time!",
  //                 "languageCode": "en"
  //             },
  //             "authorAttribution": {
  //                 "displayName": "Rupinder Sanger",
  //                 "uri": "https://www.google.com/maps/contrib/114380012802325773706/reviews",
  //                 "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU6-ydqwx2uuiAuUZ_dJ2Y79uLg9hQM43ThACRB2fnNwQPXDpUXiA=s128-c0x00000000-cc-rp-mo"
  //             },
  //             "publishTime": "2025-06-20T01:54:42.363829919Z",
  //             "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2tWNmVITndNbFZGU0doTFFuZE5WM1JHZGxRMGQwRRAB&d=17924085&t=1",
  //             "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tWNmVITndNbFZGU0doTFFuZE5WM1JHZGxRMGQwRRAB!2m1!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2"
  //         },
  //         {
  //             "name": "places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik/reviews/Ci9DQUlRQUNvZENodHljRjlvT25WTUxXNTBUM0UyU0RaWlExRkdiV3BGZGtsTlQxRRAB",
  //             "relativePublishTimeDescription": "2 months ago",
  //             "rating": 5,
  //             "text": {
  //                 "text": "Had a great time with AZ and Rocky! The food was great, the show was entertaining and I highly recommend hiring them if you are considering it.",
  //                 "languageCode": "en"
  //             },
  //             "originalText": {
  //                 "text": "Had a great time with AZ and Rocky! The food was great, the show was entertaining and I highly recommend hiring them if you are considering it.",
  //                 "languageCode": "en"
  //             },
  //             "authorAttribution": {
  //                 "displayName": "The Hash’s",
  //                 "uri": "https://www.google.com/maps/contrib/102588039202278729654/reviews",
  //                 "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVxT5R4jugJmfvdRBOD-hpnq0kBKSMsWKclRs3drCaxCTbuj1vN=s128-c0x00000000-cc-rp-mo"
  //             },
  //             "publishTime": "2025-06-20T01:55:26.569762276Z",
  //             "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT25WTUxXNTBUM0UyU0RaWlExRkdiV3BGZGtsTlQxRRAB&d=17924085&t=1",
  //             "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25WTUxXNTBUM0UyU0RaWlExRkdiV3BGZGtsTlQxRRAB!2m1!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2"
  //         },
  //         {
  //             "name": "places/ChIJ0VGZsrR7ToYRwqTnAM8c6ik/reviews/Ci9DQUlRQUNvZENodHljRjlvT2pKRFQzSjNlRWx2ZG1oQ1JtaHlRMEZJYmpkdVExRRAB",
  //             "relativePublishTimeDescription": "2 months ago",
  //             "rating": 5,
  //             "text": {
  //                 "text": "We attended an event with Bamboo Hibachi and it was the best Hibachi experience we’ve ever had. It was so fun and interactive - AZ and Rocky were not only attentive, they made sure everyone was having fun! We played games and had delicious food!",
  //                 "languageCode": "en"
  //             },
  //             "originalText": {
  //                 "text": "We attended an event with Bamboo Hibachi and it was the best Hibachi experience we’ve ever had. It was so fun and interactive - AZ and Rocky were not only attentive, they made sure everyone was having fun! We played games and had delicious food!",
  //                 "languageCode": "en"
  //             },
  //             "authorAttribution": {
  //                 "displayName": "Sharmeen Khan",
  //                 "uri": "https://www.google.com/maps/contrib/101465399162298570138/reviews",
  //                 "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU3Gjg2hFAN0mFk762GLovwNKPq7IxpdIeZquirQ0uk-EL4F2Ty=s128-c0x00000000-cc-rp-mo"
  //             },
  //             "publishTime": "2025-06-20T01:55:54.230850053Z",
  //             "flagContentUri": "https://www.google.com/local/review/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2pKRFQzSjNlRWx2ZG1oQ1JtaHlRMEZJYmpkdVExRRAB&d=17924085&t=1",
  //             "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pKRFQzSjNlRWx2ZG1oQ1JtaHlRMEZJYmpkdVExRRAB!2m1!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2"
  //         }
  //     ],
  //     "googleMapsLinks": {
  //         "placeUri": "https://maps.google.com/?cid=3020258175504327874&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA",
  //         "writeAReviewUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2!12e1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA",
  //         "reviewsUri": "https://www.google.com/maps/place//data=!4m4!3m3!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2!9m1!1b1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA",
  //         "photosUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x864e7bb4b29951d1:0x29ea1ccf00e7a4c2!10e5?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA"
  //     }
  // }`);
  if (!placeData || placeData.error) return null;
  return (
    <PageLayout title="Reviews">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-4 py-8 rounded-2xl border-2 border-main-red/50 text-center grid gap-3 place-items-center">
          <Link
            href={placeData.googleMapsLinks.placeUri}
            target="_blank"
            className="font-bold hover:scale-105 transition-all duration-200"
          >
            {placeData.displayName.text}
          </Link>
          <div className="text-4xl font-bold text-main-red">
            {Number(placeData.rating).toFixed(1)}
          </div>
          <div className="flex items-start gap-2">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>

          <Link
            href={placeData.googleMapsLinks.reviewsUri}
            target="_blank"
            className="flex items-center gap-2 hover:scale-105 transition-all duration-200 font-medium"
          >
            <BsGoogle />
            <div>
              <span className="text-main-red">{placeData.userRatingCount}</span>{" "}
              Reviews
            </div>
          </Link>
        </div>

        {placeData.reviews &&
          placeData.reviews.length > 0 &&
          placeData.reviews.map((review: any) => (
            <div
              key={review.name}
              className="p-6 py-8 rounded-2xl border-2 border-main-red/50 flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.authorAttribution.photoUri}
                      alt={review.authorAttribution.displayName}
                      className="w-12 h-12 rounded-full border border-white/10"
                    />
                    <div className="font-medium">
                      {review.authorAttribution.displayName}
                    </div>
                  </div>

                  <div className="text-sm text-white/60">
                    {review.relativePublishTimeDescription}
                  </div>
                </div>
                <Stars rating={review.rating} />
                <p className="italic mt-4 text-white/80">{review.text.text}</p>
              </div>
              <Link
                href={review.googleMapsUri}
                target="_blank"
                className="flex items-center gap-2 hover:text-main-red transition-all duration-200 font-medium"
              >
                <BsGoogle />
                View on Google
              </Link>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? (
          <BsStarFill key={i} className="text-main-red" />
        ) : (
          <BsStar key={i} className="text-main-red" />
        )
      )}
    </div>
  );
}
