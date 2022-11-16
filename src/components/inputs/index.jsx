import { Request } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../services/api";
import { useContext } from "react";
import { ResponseContext } from "../../providers/response";
import { TbCurrencyReal } from "react-icons/tb"
import { FaTimes, FaPercentage } from "react-icons/fa"
import InputMask from "react-input-mask"


function InputInfo() {
  const { setResp } = useContext(ResponseContext);

  const formSchema = yup.object().shape({
    amount: yup.number().required("Digite o valor do pagamento!").positive(),
    installments: yup.number().required("Digite o número de parcelas!").integer(),
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
    Api.post("", data)
      .then((res) => setResp(res))
      .catch((err) => console.log(err));
  }

  return (
    <Request onSubmit={handleSubmit(onSubmitFunction)}>
      <div>
        <p>Informe o valor da venda * <span>{errors.amount?.message}</span></p>
        <div>
          <TbCurrencyReal/>
          <input type="float" placeholder="Digite aqui..." {...register("amount")}/>
        </div>
      </div>

      <div>
        <p>Em quantas parcelas * <span>{errors.installments?.message}</span></p>
        <div>
          <FaTimes/>
          <input type="number" max={12} min={1} placeholder="Digite aqui..." {...register("installments")} />
        </div>
      </div>

      <div>
        <p>Informe o percentual de MDR * <span>{errors.mdr?.message}</span></p>
        <div>
          <FaPercentage/>
          <input type="float" placeholder="Digite aqui..." {...register("mdr")} />
        </div>
      </div>

      <button>Consultar</button>
    </Request>
  );
}

export default InputInfo;
