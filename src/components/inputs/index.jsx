import { Request } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../services/api";
import { useContext } from "react";
import { ResponseContext } from "../../providers/response";

function InputInfo() {
  const { setResp } = useContext(ResponseContext);

  const formSchema = yup.object().shape({
    amount: yup.number().required("Digite o valor do pagamento!").positive(),
    installments: yup
      .number()
      .required("Digite o número de parcelas!")
      .integer(),
    mdr: yup.number().required("Digite o valor da taxa de cobrança!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    const newObj = {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr,
    };

    Api.post("", newObj)
      .then((res) => setResp(res))
      .catch((err) => console.log(err));
  }

  return (
    <Request onSubmit={handleSubmit(onSubmitFunction)}>
      <p>
        Informe o valor da venda * <span>{errors.amount?.message}</span>
      </p>
      <input
        type="number"
        placeholder="Digite aqui..."
        {...register("amount")}
      />

      <p>
        Em quantas parcelas * <span>{errors.installments?.message}</span>
      </p>
      <input
        type="number"
        placeholder="Digite aqui..."
        {...register("installments")}
      />

      <p>
        Informe o percentual de MDR * <span>{errors.mdr?.message}</span>
      </p>
      <input type="number" placeholder="Digite aqui..." {...register("mdr")} />

      <button>Consultar</button>
    </Request>
  );
}

export default InputInfo;
