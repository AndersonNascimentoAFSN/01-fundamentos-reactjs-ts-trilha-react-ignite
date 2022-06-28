import { format, formatDistanceToNow } from "date-fns";

export class FormatDates {
  static dateFormatted(date, formatDate, locale) {
    return format(
      date,
      formatDate,
      {
        locale: locale,
      }
    )
  }
}

  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   min: "2-digit",
  // }).format(publishedAt);

